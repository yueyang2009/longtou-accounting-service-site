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

    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const targets = new Float32Array(particleCount * 3);
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
      // A compact humanoid silhouette: particles first settle into this shape, then dissolve into the approved IP image.
      const targetRise = Math.random();
      const isHead = targetRise > .6;
      const targetRadius = isHead ? .45 * Math.sqrt(Math.random()) : .62 * Math.sqrt(Math.random());
      const targetAngle = Math.random() * Math.PI * 2;
      targets[i * 3] = Math.cos(targetAngle) * targetRadius * (isHead ? 1 : .72);
      targets[i * 3 + 1] = isHead ? .72 + targetRise * .92 : -1.0 + targetRise * 1.72;
      targets[i * 3 + 2] = Math.sin(targetAngle) * targetRadius * .26;
      scales[i] = 0.8 + Math.random() * 2.2;
      seeds[i] = Math.random();
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const targetAttribute = new THREE.BufferAttribute(targets, 3);
    particlesGeometry.setAttribute("aTarget", targetAttribute);
    particlesGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    particlesGeometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader, fragmentShader: particleFragmentShader,
      uniforms: { uTime: { value: 0 }, uPhase: { value: 0 } }, transparent: true, depthWrite: false, blending: THREE.NormalBlending,
    });
    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    // Sample the approved 龙灵 artwork itself, so the convergence uses its real silhouette rather than a generic figure.
    const sourceImage = new Image();
    const basePath = window.location.pathname.startsWith("/longtou-accounting-service-site") ? "/longtou-accounting-service-site" : "";
    sourceImage.src = `${basePath}/images/longling-brand-ip.png`;
    sourceImage.onload = () => {
      const sampleSize = 220;
      const canvas = document.createElement("canvas");
      canvas.width = sampleSize;
      canvas.height = sampleSize;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return;
      context.drawImage(sourceImage, 0, 0, sampleSize, sampleSize);
      const imageData = context.getImageData(0, 0, sampleSize, sampleSize).data;
      const pixels: Array<[number, number]> = [];
      for (let y = 2; y < sampleSize - 2; y += 2) {
        for (let x = 2; x < sampleSize - 2; x += 2) {
          const offset = (y * sampleSize + x) * 4;
          const r = imageData[offset]; const g = imageData[offset + 1]; const b = imageData[offset + 2];
          // White background is excluded; pale robe pixels are retained to preserve the whole IP outline.
          if (Math.min(r, g, b) < 238 || Math.max(r, g, b) - Math.min(r, g, b) > 18) pixels.push([x, y]);
        }
      }
      if (!pixels.length) return;
      for (let i = 0; i < particleCount; i++) {
        const [x, y] = pixels[Math.floor(Math.random() * pixels.length)];
        targets[i * 3] = (x / sampleSize - .5) * 2.45;
        targets[i * 3 + 1] = (.5 - y / sampleSize) * 3.9 + .35;
        targets[i * 3 + 2] = (Math.random() - .5) * .16;
      }
      targetAttribute.needsUpdate = true;
    };

    const dragon = new THREE.Group();
    const dragonMaterial = new THREE.MeshStandardMaterial({ color: 0x0a4a9e, metalness: 0.78, roughness: 0.28, transparent: true, opacity: 0 });
    const silver = new THREE.MeshStandardMaterial({ color: 0xb5d8f9, metalness: 0.9, roughness: 0.2, transparent: true, opacity: 0 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xecc36d, metalness: 0.8, roughness: 0.24, transparent: true, opacity: 0 });
    const dragonMaterials = [dragonMaterial, silver, gold];
    const spine = new THREE.CatmullRomCurve3(Array.from({ length: 14 }, (_, i) => {
      const t = i / 13;
      return new THREE.Vector3(Math.sin(t * Math.PI * 2.1) * 0.82, -0.7 + t * 4.25, Math.cos(t * Math.PI * 2.1) * 0.25);
    }));
    // Fragmented scales form a water-sculpture body: intentionally no TubeGeometry / smooth pipe.
    for (let i = 0; i < 29; i++) {
      const t = i / 30;
      const point = spine.getPointAt(t);
      const scale = 0.31 - t * 0.16;
      for (const side of [-1, 1]) {
        const scaleMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(scale, 1), i % 3 === 0 ? silver : dragonMaterial);
        scaleMesh.position.copy(point).add(new THREE.Vector3(side * (0.11 + scale * .45), 0, (i % 2 ? .09 : -.09)));
        scaleMesh.scale.set(1.35, .42, .75);
        scaleMesh.rotation.set(i * .35, side * .45, side * .65);
        dragon.add(scaleMesh);
      }
      if (i % 2 === 0) {
        const fin = new THREE.Mesh(new THREE.ConeGeometry(scale * .42, scale * 1.9, 4), silver);
        fin.position.copy(point).add(new THREE.Vector3(0, scale * 1.22, 0));
        fin.rotation.z = Math.PI;
        dragon.add(fin);
      }
    }
    // Four expressive limbs and three claws give the rising creature an anime-character silhouette.
    for (let index = 0; index < 2; index++) {
      const t = [.38, .6][index];
      const anchor = spine.getPointAt(t);
      for (const side of [-1, 1]) {
        const shoulder = new THREE.Mesh(new THREE.SphereGeometry(.19, 14, 10), silver);
        shoulder.position.copy(anchor).add(new THREE.Vector3(side * .22, -.02, .05));
        dragon.add(shoulder);
        const arm = new THREE.Mesh(new THREE.CapsuleGeometry(.105, .46, 5, 10), dragonMaterial);
        arm.position.copy(anchor).add(new THREE.Vector3(side * .43, -.36 - index * .08, .12));
        arm.rotation.z = side * .68;
        dragon.add(arm);
        const paw = new THREE.Mesh(new THREE.SphereGeometry(.15, 14, 10), silver);
        paw.position.copy(anchor).add(new THREE.Vector3(side * .66, -.63 - index * .08, .18));
        dragon.add(paw);
        for (const clawIndex of [-1, 0, 1]) {
          const claw = new THREE.Mesh(new THREE.ConeGeometry(.035, .22, 5), gold);
          claw.position.copy(paw.position).add(new THREE.Vector3(side * .08, -.14, clawIndex * .07));
          claw.rotation.z = Math.PI;
          dragon.add(claw);
        }
      }
    }
    const head = new THREE.Group();
    head.position.set(.55, 3.45, 0);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(.52, 24, 18), dragonMaterial);
    skull.scale.set(1.25, .8, .82); head.add(skull);
    const snout = new THREE.Mesh(new THREE.SphereGeometry(.31, 20, 14), silver);
    snout.position.set(.42, -.08, .02); snout.scale.set(1.45, .58, .72); head.add(snout);
    for (const side of [-1, 1]) {
      const brow = new THREE.Mesh(new THREE.ConeGeometry(.16, .55, 4), silver);
      brow.position.set(.1, .27, side * .3); brow.rotation.z = Math.PI * .42; brow.rotation.x = side * .45; head.add(brow);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(.064, 12, 10), gold);
      eye.position.set(.36, .08, side * .42); head.add(eye);
      const horn = new THREE.Mesh(new THREE.ConeGeometry(.09, .7, 6), gold);
      horn.position.set(-.16, .5, side * .31); horn.rotation.z = side * -.32; horn.rotation.x = side * -.45; head.add(horn);
      const whisker = new THREE.Mesh(new THREE.TorusGeometry(.35, .025, 8, 20, Math.PI * .7), silver);
      whisker.position.set(.64, -.22, side * .28); whisker.rotation.set(side * .82, .5, side * .7); head.add(whisker);
      const mane = new THREE.Mesh(new THREE.ConeGeometry(.14, .56, 5), silver);
      mane.position.set(-.42, .08, side * .4); mane.rotation.z = side * 1.1; head.add(mane);
    }
    dragon.add(head);
    for (const x of [-0.2, 0.2]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.52, 12), gold);
      horn.position.set(0.52 + x, 3.86, 0);
      horn.rotation.z = x * 0.65;
      dragon.add(horn);
    }
    scene.add(dragon);
    // The previous procedural dragon is retained only as source code during this iteration; it is never rendered.
    dragon.visible = false;

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
      const mascotReveal = clamp01((p - .62) / .22);
      waterMaterial.uniforms.uTime.value = t;
      waterMaterial.uniforms.uEnergy.value = clamp01(p * 2.2);
      particleMaterial.uniforms.uTime.value = t;
      particleMaterial.uniforms.uPhase.value = Math.min(p * 1.5, 1);
      dragonMaterials.forEach((material) => { material.opacity = 0; });
      formalLongling.visible = mascotReveal > .02 && formalLongling.children.length > 0;
      formalLongling.scale.setScalar(Math.max(mascotReveal * 1.2, 0.0001));
      formalLongling.position.y = -0.64 + Math.sin(t * 1.3) * 0.025;
      dragon.rotation.y = t * 0.14 + pointer.x * 0.24;
      dragon.position.y = Math.sin(t * 1.1) * .08;
      particles.rotation.y = t * .025 + pointer.x * .11;
      camera.position.x += (pointer.x * .48 - camera.position.x) * .025;
      camera.position.y += ((1.2 - p * .38) - camera.position.y) * .02;
      camera.lookAt(0, 1.2, 0);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); container.removeEventListener("pointermove", onPointer);
      particlesGeometry.dispose(); particleMaterial.dispose(); water.geometry.dispose(); waterMaterial.dispose(); dragonMaterials.forEach((material) => material.dispose()); renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [progress, target]);

  return <div ref={host} className="brand-launch-canvas" aria-hidden="true" />;
}
