"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { loadLonglingModel } from "./LonglingModel";
import { particleFragmentShader, particleVertexShader, waterFragmentShader, waterVertexShader } from "./shaders";

type Props = { progress: React.MutableRefObject<number>; target: React.MutableRefObject<number> };

function clamp01(value: number) { return Math.min(Math.max(value, 0), 1); }

export function BrandLaunchScene({ progress, target }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const phase = useRef(0);

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020713, 0.1);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 1.2, 7.4);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const waterMaterial = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader, fragmentShader: waterFragmentShader,
      uniforms: { uTime: { value: 0 }, uEnergy: { value: 0 } }, side: THREE.DoubleSide,
    });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(14, 10, 120, 120), waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -1.18;
    scene.add(water);

    const particleCount = 4400;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const seeds = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.65) * 2.9;
      const rise = Math.random();
      const dragonCurve = Math.sin(rise * Math.PI * 2.2) * 0.72;
      positions[i * 3] = Math.cos(a) * r * (1 - rise * 0.35) + dragonCurve;
      positions[i * 3 + 1] = -1.05 + rise * 4.1;
      positions[i * 3 + 2] = Math.sin(a) * r * 0.5;
      scales[i] = 1.2 + Math.random() * 3.4;
      seeds[i] = Math.random();
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    particlesGeometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader, fragmentShader: particleFragmentShader,
      uniforms: { uTime: { value: 0 }, uPhase: { value: 0 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    const dragon = new THREE.Group();
    const dragonMaterial = new THREE.MeshPhysicalMaterial({ color: 0x0b55b8, metalness: 0.72, roughness: 0.22, transparent: true, opacity: 0 });
    const spine = new THREE.CatmullRomCurve3(Array.from({ length: 14 }, (_, i) => {
      const t = i / 13;
      return new THREE.Vector3(Math.sin(t * Math.PI * 2.1) * 0.82, -0.7 + t * 4.25, Math.cos(t * Math.PI * 2.1) * 0.25);
    }));
    const body = new THREE.Mesh(new THREE.TubeGeometry(spine, 120, 0.23, 10, false), dragonMaterial);
    dragon.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.56, 32, 24), dragonMaterial);
    head.position.set(0.52, 3.42, 0);
    head.scale.set(1.28, 0.82, 0.98);
    dragon.add(head);
    const gold = new THREE.MeshBasicMaterial({ color: 0xf6c768, transparent: true, opacity: 0 });
    for (const x of [-0.2, 0.2]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.52, 12), gold);
      horn.position.set(0.52 + x, 3.86, 0);
      horn.rotation.z = x * 0.65;
      dragon.add(horn);
    }
    scene.add(dragon);

    const ambient = new THREE.AmbientLight(0x2f70bb, 1.8);
    const key = new THREE.PointLight(0x75c8ff, 24, 12); key.position.set(2, 4, 3);
    const goldLight = new THREE.PointLight(0xffc869, 7, 8); goldLight.position.set(-3, 1.5, 2);
    scene.add(ambient, key, goldLight);
    const formalLongling = loadLonglingModel(scene);

    const pointer = new THREE.Vector2();
    const onPointer = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.set((event.clientX - rect.left) / rect.width - .5, (event.clientY - rect.top) / rect.height - .5);
    };
    container.addEventListener("pointermove", onPointer);
    const resize = () => { camera.aspect = container.clientWidth / container.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(container.clientWidth, container.clientHeight); };
    const observer = new ResizeObserver(resize); observer.observe(container);
    const clock = new THREE.Clock();
    let frame = 0;
    const render = () => {
      const t = clock.getElapsedTime();
      progress.current += (target.current - progress.current) * 0.035;
      phase.current = progress.current;
      const p = progress.current;
      const dragonReveal = clamp01((p - .18) / .36);
      const mascotReveal = clamp01((p - .62) / .22);
      waterMaterial.uniforms.uTime.value = t;
      waterMaterial.uniforms.uEnergy.value = clamp01(p * 2.2);
      particleMaterial.uniforms.uTime.value = t;
      particleMaterial.uniforms.uPhase.value = Math.min(p * 1.5, 1);
      dragonMaterial.opacity = dragonReveal * (1 - mascotReveal) * .96;
      gold.opacity = dragonMaterial.opacity;
      formalLongling.visible = mascotReveal > .02 && formalLongling.children.length > 0;
      formalLongling.scale.setScalar(Math.max(mascotReveal * 1.2, 0.0001));
      formalLongling.position.y = -0.64 + Math.sin(t * 1.3) * 0.025;
      dragon.rotation.y = t * 0.14 + pointer.x * 0.24;
      dragon.position.y = Math.sin(t * 1.1) * .08;
      particles.rotation.y = t * .05 + pointer.x * .16;
      camera.position.x += (pointer.x * .48 - camera.position.x) * .025;
      camera.position.y += ((1.2 - p * .38) - camera.position.y) * .02;
      camera.lookAt(0, 1.2, 0);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); container.removeEventListener("pointermove", onPointer);
      particlesGeometry.dispose(); particleMaterial.dispose(); water.geometry.dispose(); waterMaterial.dispose(); dragonMaterial.dispose(); gold.dispose(); renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [progress, target]);

  return <div ref={host} className="brand-launch-canvas" aria-hidden="true" />;
}
