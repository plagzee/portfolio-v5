import * as THREE from "three";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";

import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

export class PostProcessing {
  private composer: EffectComposer;

  constructor(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera
  ) {
    this.composer = new EffectComposer(
      renderer
    );

    const renderPass = new RenderPass(
      scene,
      camera
    );

    this.composer.addPass(renderPass);

    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),

      0.18,
      0.25,
      0.9
    );

    this.composer.addPass(bloom);

    const output = new OutputPass();

    this.composer.addPass(output);
  }

  render(_: number) {
    this.composer.render();
  }

  resize() {
    this.composer.setSize(
      window.innerWidth,
      window.innerHeight
    );
  }
}