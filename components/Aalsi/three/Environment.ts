import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export class Environment {
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  async load() {
    const loader = new RGBELoader();

    // Put this HDR in /public/hdr/studio_small_09_1k.hdr
    const texture = await loader.loadAsync(
      "/hdr/moonless_golf_1k.hdr"
    );

    texture.mapping = THREE.EquirectangularReflectionMapping;

    this.scene.environment = texture;
    this.scene.background = texture;
  }
}