"use client";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/**
 * Formal GLB hand-off: place the approved rigged asset at /models/longling.glb.
 * The image reference stays as the brand-safe fallback until that asset exists.
 */
export function loadLonglingModel(scene: THREE.Scene, basePath = "/longtou-accounting-service-site") {
  const group = new THREE.Group();
  group.name = "longling-glb-model";
  group.position.set(0, -0.64, 0.4);
  group.visible = false;
  scene.add(group);
  const modelUrl = `${basePath}/models/longling.glb`;
  void fetch(modelUrl, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) return;
      new GLTFLoader().load(modelUrl, (gltf) => {
        group.add(gltf.scene);
        gltf.scene.scale.setScalar(1.25);
        group.visible = true;
      });
    })
    .catch(() => undefined);
  return group;
}
