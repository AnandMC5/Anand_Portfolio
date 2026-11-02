import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Layers, Sparkles, Database, Eye, EyeOff, RotateCcw, Play, Pause, Compass, ArrowRight } from 'lucide-react';

interface Hero3DCanvasProps {
  className?: string;
  defaultMode?: 'lakehouse' | 'groq' | 'cutover';
  interactive?: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({
  className = '',
  defaultMode = 'lakehouse',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'lakehouse' | 'groq' | 'cutover'>(defaultMode);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [spacing, setSpacing] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [activePreset, setActivePreset] = useState<'iso' | 'top' | 'front'>('iso');

  const modeRef = useRef(activeMode);
  const isPlayingRef = useRef(isPlaying);
  const speedRef = useRef(speed);
  const spacingRef = useRef(spacing);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    modeRef.current = activeMode;
  }, [activeMode]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    spacingRef.current = spacing;
  }, [spacing]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060b17, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(5.5, 4.2, 5.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 14;
    controls.minDistance = 3;
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controls.enabled = interactive;
    controlsRef.current = controls;

    // Lighting Rig
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.8);
    keyLight.position.set(6, 8, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.shadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 25;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x818cf8, 1.4);
    fillLight.position.set(-6, 4, -4);
    scene.add(fillLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x020617, 1.2);
    scene.add(hemiLight);

    // Ground Contact Shadow
    const shadowGeo = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x020617,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.6;
    scene.add(shadowMesh);

    // Materials
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0xca8a04,
      metalness: 0.85,
      roughness: 0.25,
    });

    const silverMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.18,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
    });

    const neonCyanMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.5,
    });

    const purpleMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.6,
    });

    const linkLineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });

    // -------------------------------------------------------------------------
    // 1. AZURE MEDALLION LAKEHOUSE PIPELINE (ADF -> Bronze -> Silver -> Gold -> Power BI)
    // -------------------------------------------------------------------------
    const lakehouseGroup = new THREE.Group();

    // Ingestion Node: Azure Data Factory (ADF)
    const adfGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const adfMesh = new THREE.Mesh(adfGeo, neonCyanMat);
    adfMesh.position.set(-2.8, -0.2, 0);
    lakehouseGroup.add(adfMesh);

    // Medallion Tiers
    // Tier 1: Bronze Disk (ADLS Gen2 Raw Trip Files)
    const bronzeGeo = new THREE.CylinderGeometry(2.0, 2.0, 0.22, 48);
    const bronzeRing = new THREE.Mesh(bronzeGeo, bronzeMat);
    bronzeRing.position.y = -1.1;
    lakehouseGroup.add(bronzeRing);

    // Tier 2: Silver Disk (Databricks PySpark Cleansed Delta Tables)
    const silverGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.22, 48);
    const silverRing = new THREE.Mesh(silverGeo, silverMat);
    silverRing.position.y = -0.1;
    lakehouseGroup.add(silverRing);

    // Tier 3: Gold Disk (Star Schema Dimensional Mart)
    const goldGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.22, 48);
    const goldRing = new THREE.Mesh(goldGeo, goldMat);
    goldRing.position.y = 0.9;
    lakehouseGroup.add(goldRing);

    // Analytics Node: Power BI
    const powerBiGeo = new THREE.BoxGeometry(0.7, 0.9, 0.5);
    const powerBiMesh = new THREE.Mesh(powerBiGeo, bronzeMat);
    powerBiMesh.position.set(2.8, 0.8, 0);
    lakehouseGroup.add(powerBiMesh);

    // Inter-tier Central Data Pipeline Conduit
    const centralColGeo = new THREE.CylinderGeometry(0.2, 0.2, 2.4, 24);
    const centralColMesh = new THREE.Mesh(centralColGeo, silverMat);
    centralColMesh.position.y = -0.1;
    lakehouseGroup.add(centralColMesh);

    // Streaming Particles along the pipeline
    const lakehouseParticlesCount = 50;
    const lakehouseParticlesGeo = new THREE.BufferGeometry();
    const lakehousePositions = new Float32Array(lakehouseParticlesCount * 3);
    for (let i = 0; i < lakehouseParticlesCount; i++) {
      const angle = (i / lakehouseParticlesCount) * Math.PI * 2;
      const radius = 1.2 + (i % 3) * 0.5;
      const y = -1.1 + (i % 3) * 1.0;
      lakehousePositions[i * 3] = Math.cos(angle) * radius;
      lakehousePositions[i * 3 + 1] = y;
      lakehousePositions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    lakehouseParticlesGeo.setAttribute('position', new THREE.BufferAttribute(lakehousePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
    });
    const lakehouseParticles = new THREE.Points(lakehouseParticlesGeo, particleMat);
    lakehouseGroup.add(lakehouseParticles);

    scene.add(lakehouseGroup);

    // -------------------------------------------------------------------------
    // 2. GROQ AI AUTONOMOUS DATA AGENT (Llama 3.3/70B · NL-to-SQL · Schema Introspection)
    // -------------------------------------------------------------------------
    const groqGroup = new THREE.Group();
    groqGroup.visible = false;

    // Central Groq Inference Processor (Llama 3.3/70B)
    const groqCoreGeo = new THREE.OctahedronGeometry(1.1, 0);
    const groqCoreMesh = new THREE.Mesh(groqCoreGeo, neonCyanMat);
    groqGroup.add(groqCoreMesh);

    // Fast Groq Accelerator Torus Rings
    const groqTorusGeo1 = new THREE.TorusGeometry(1.8, 0.04, 16, 64);
    const groqTorus1 = new THREE.Mesh(groqTorusGeo1, linkLineMat);
    groqTorus1.rotation.x = Math.PI / 3;
    groqGroup.add(groqTorus1);

    const groqTorusGeo2 = new THREE.TorusGeometry(2.3, 0.04, 16, 64);
    const groqTorus2 = new THREE.Mesh(groqTorusGeo2, linkLineMat);
    groqTorus2.rotation.y = Math.PI / 4;
    groqGroup.add(groqTorus2);

    // Satellite Specialized Agents:
    // 1. PostgreSQL Schema Introspector
    // 2. Read-Only SQL Compiler & Safety Sandbox
    // 3. Multi-Format Profile Agent (CSV/PSV/XLSX)
    // 4. Natural Language Input Parser
    const agentNodesData = [
      { name: 'Schema Introspector', pos: new THREE.Vector3(-2.2, 0.8, 1.2), color: 0x38bdf8 },
      { name: 'NL-to-SQL Compiler', pos: new THREE.Vector3(2.2, 0.8, -1.0), color: 0x22d3ee },
      { name: 'Safety Sandbox', pos: new THREE.Vector3(-1.8, -1.0, -1.8), color: 0xca8a04 },
      { name: 'Profile Agent', pos: new THREE.Vector3(1.8, -0.9, 1.8), color: 0xa855f7 },
    ];

    const agentNodes: THREE.Mesh[] = [];
    const agentNodeGeo = new THREE.SphereGeometry(0.32, 24, 24);

    agentNodesData.forEach((item) => {
      const aMat = new THREE.MeshStandardMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.5,
        roughness: 0.2,
      });
      const nodeMesh = new THREE.Mesh(agentNodeGeo, aMat);
      nodeMesh.position.copy(item.pos);
      agentNodes.push(nodeMesh);
      groqGroup.add(nodeMesh);

      // Connecting ray lines from Groq core to agent nodes
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        item.pos,
      ]);
      const rayLine = new THREE.Line(lineGeo, linkLineMat);
      groqGroup.add(rayLine);
    });

    scene.add(groqGroup);

    // -------------------------------------------------------------------------
    // 3. 100M+ TELECOM BSS MIGRATION & RECONCILIATION PIPELINE
    // -------------------------------------------------------------------------
    const cutoverGroup = new THREE.Group();
    cutoverGroup.visible = false;

    // Source Cluster: Oracle & Cassandra
    const oracleGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.2, 32);
    const oracleMesh = new THREE.Mesh(oracleGeo, bronzeMat);
    oracleMesh.position.set(-2.5, 0.4, 0);
    cutoverGroup.add(oracleMesh);

    const cassandraGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.9, 32);
    const cassandraMesh = new THREE.Mesh(cassandraGeo, silverMat);
    cassandraMesh.position.set(-2.5, -0.9, 0);
    cutoverGroup.add(cassandraMesh);

    // Central Automated Reconciliation Engine (Row counts, balances, subscriptions)
    const reconGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const reconMesh = new THREE.Mesh(reconGeo, neonCyanMat);
    reconMesh.position.set(0, 0, 0);
    cutoverGroup.add(reconMesh);

    // Target Cluster: MongoDB & MySQL Billing
    const mongoGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.2, 32);
    const mongoMesh = new THREE.Mesh(mongoGeo, purpleMat);
    mongoMesh.position.set(2.5, 0.4, 0);
    cutoverGroup.add(mongoMesh);

    const mysqlGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.9, 32);
    const mysqlMesh = new THREE.Mesh(mysqlGeo, goldMat);
    mysqlMesh.position.set(2.5, -0.9, 0);
    cutoverGroup.add(mysqlMesh);

    // High-speed data migration trajectories
    const trajCurve1 = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-2.5, 0.4, 0),
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(2.5, 0.4, 0)
    );
    const trajLine1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(trajCurve1.getPoints(30)),
      linkLineMat
    );
    cutoverGroup.add(trajLine1);

    const trajCurve2 = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-2.5, -0.9, 0),
      new THREE.Vector3(0, -1.2, 0),
      new THREE.Vector3(2.5, -0.9, 0)
    );
    const trajLine2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(trajCurve2.getPoints(30)),
      linkLineMat
    );
    cutoverGroup.add(trajLine2);

    scene.add(cutoverGroup);

    // ----------------------------------------------------
    // Animation Loop
    // ----------------------------------------------------
    let frameId = 0;
    let prevTime = performance.now();
    const startTime = performance.now();

    const tick = () => {
      const now = performance.now();
      const delta = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;
      const time = (now - startTime) / 1000;
      const currentSpeed = speedRef.current;
      const isRunning = isPlayingRef.current;

      const currentMode = modeRef.current;
      lakehouseGroup.visible = currentMode === 'lakehouse';
      groqGroup.visible = currentMode === 'groq';
      cutoverGroup.visible = currentMode === 'cutover';

      if (isRunning) {
        const step = delta * currentSpeed;

        // 1. Lakehouse Animations
        if (lakehouseGroup.visible) {
          lakehouseGroup.rotation.y += step * 0.3;
          const userSpacing = spacingRef.current;
          bronzeRing.position.y = -1.1 * userSpacing;
          silverRing.position.y = -0.1 * userSpacing;
          goldRing.position.y = 0.9 * userSpacing;
          bronzeRing.rotation.y += step * 0.1;
          silverRing.rotation.y -= step * 0.15;
          goldRing.rotation.y += step * 0.2;
          adfMesh.rotation.y += step * 0.5;
          powerBiMesh.rotation.y += step * 0.4;
        }

        // 2. Groq AI Agent Animations
        if (groqGroup.visible) {
          groqCoreMesh.rotation.y += step * 0.6;
          groqCoreMesh.rotation.x += step * 0.3;
          groqTorus1.rotation.z += step * 0.4;
          groqTorus2.rotation.x += step * 0.3;
          const userSpacing = spacingRef.current;
          agentNodes.forEach((node, idx) => {
            const basePos = agentNodesData[idx].pos;
            node.position.x = basePos.x * userSpacing;
            node.position.y = basePos.y + Math.sin(time * 2 + idx) * 0.15;
            node.position.z = basePos.z * userSpacing;
          });
        }

        // 3. Telecom Migration Animations
        if (cutoverGroup.visible) {
          reconMesh.rotation.y += step * 0.8;
          reconMesh.rotation.z += step * 0.4;
          oracleMesh.rotation.y += step * 0.2;
          mongoMesh.rotation.y -= step * 0.2;
        }
      }

      controls.update();
      renderer.render(scene, camera);

      frameId = requestAnimationFrame(tick);
    };

    tick();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      bronzeGeo.dispose();
      silverGeo.dispose();
      goldGeo.dispose();
      centralColGeo.dispose();
      lakehouseParticlesGeo.dispose();
      groqCoreGeo.dispose();
      groqTorusGeo1.dispose();
      groqTorusGeo2.dispose();
      agentNodeGeo.dispose();
      oracleGeo.dispose();
      cassandraGeo.dispose();
      reconGeo.dispose();
      mongoGeo.dispose();
      mysqlGeo.dispose();
      adfGeo.dispose();
      powerBiGeo.dispose();
      shadowGeo.dispose();
      bronzeMat.dispose();
      silverMat.dispose();
      goldMat.dispose();
      neonCyanMat.dispose();
      purpleMat.dispose();
      particleMat.dispose();
      linkLineMat.dispose();
      shadowMat.dispose();
    };
  }, [interactive]);

  const applyPreset = (preset: 'iso' | 'top' | 'front') => {
    setActivePreset(preset);
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    if (preset === 'iso') {
      camera.position.set(5.5, 4.2, 5.5);
    } else if (preset === 'top') {
      camera.position.set(0.01, 7.5, 0.01);
    } else if (preset === 'front') {
      camera.position.set(0, 0.5, 7.5);
    }
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
  };

  const getModeDescription = () => {
    if (activeMode === 'lakehouse') {
      return 'Azure Data Factory → Bronze (ADLS Gen2) → Silver (PySpark) → Gold (Star Schema) → Power BI';
    }
    if (activeMode === 'groq') {
      return 'Groq Llama 3.3/70B Core ↔ PostgreSQL Schema Introspector ↔ Read-Only SQL Compiler & Profiler';
    }
    return 'Oracle & Cassandra → Automated Extraction & Reconciliation Engine → MongoDB & MySQL Target';
  };

  return (
    <div className={`relative h-full w-full overflow-hidden select-none ${className}`}>
      <div ref={mountRef} className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing" />

      {/* Top Architecture Label (Grounded in Anand's real projects) */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 max-w-[85%]">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-400 font-bold">
            Project Architecture in 3D
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-xs text-white font-semibold">
            {activeMode === 'lakehouse' ? 'Azure Cloud Medallion Lakehouse' : activeMode === 'groq' ? 'GROQ AI Autonomous Data Agent' : '100M+ Telecom BSS Migration'}
          </span>
        </div>
        <p className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">
          {getModeDescription()}
        </p>
      </div>

      {/* Ergonomic Collapsible Bottom Control Dock */}
      {interactive && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-[560px]">
          <div className="flex justify-end pr-2 mb-1">
            <button
              onClick={() => setShowControls(!showControls)}
              className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 rounded-md shadow-md transition cursor-pointer"
            >
              {showControls ? <EyeOff size={12} /> : <Eye size={12} />}
              <span>{showControls ? 'Hide Controls' : 'Show 3D Dock'}</span>
            </button>
          </div>

          {showControls && (
            <div className="bg-slate-950/92 border border-slate-800/90 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md transition-all">
              {/* Row 1: Real Project Architecture Modes */}
              <div className="flex items-center justify-between gap-1 mb-2 border-b border-slate-800/80 pb-2">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveMode('lakehouse')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition cursor-pointer whitespace-nowrap ${
                      activeMode === 'lakehouse'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <Layers size={13} />
                    <span>Azure Lakehouse</span>
                  </button>

                  <button
                    onClick={() => setActiveMode('groq')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition cursor-pointer whitespace-nowrap ${
                      activeMode === 'groq'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <Sparkles size={13} />
                    <span>GROQ AI Agent</span>
                  </button>

                  <button
                    onClick={() => setActiveMode('cutover')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition cursor-pointer whitespace-nowrap ${
                      activeMode === 'cutover'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <Database size={13} />
                    <span>100M+ Migration</span>
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md cursor-pointer transition"
                    title={isPlaying ? 'Pause Rotation' : 'Resume Rotation'}
                  >
                    {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  </button>
                  <button
                    onClick={() => {
                      setSpeed(1);
                      setSpacing(1);
                      applyPreset('iso');
                    }}
                    className="p-1.5 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md cursor-pointer transition"
                    title="Reset View"
                  >
                    <RotateCcw size={13} />
                  </button>
                </div>
              </div>

              {/* Row 2: Camera Presets & Interactive Spacing */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-slate-400 font-medium shrink-0 flex items-center gap-1">
                    <Compass size={12} /> View:
                  </span>
                  {(['iso', 'front', 'top'] as const).map((preset) => (
                    <button
                      key={preset}
                      onClick={() => applyPreset(preset)}
                      className={`px-2 py-0.5 text-[11px] font-mono rounded transition cursor-pointer uppercase ${
                        activePreset === preset
                          ? 'bg-slate-800 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-2">
                  <span className="text-[11px] text-slate-400 shrink-0">Spread</span>
                  <input
                    type="range"
                    min="0.6"
                    max="1.6"
                    step="0.05"
                    value={spacing}
                    onChange={(e) => setSpacing(parseFloat(e.target.value))}
                    className="w-20 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
