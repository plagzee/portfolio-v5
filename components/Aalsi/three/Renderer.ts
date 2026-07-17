import * as THREE from "three";

export class Renderer {
  public instance: THREE.WebGLRenderer;

  constructor() {
    this.instance = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });

    this.instance.outputColorSpace = THREE.SRGBColorSpace;

    this.instance.toneMapping =
      THREE.ACESFilmicToneMapping;

    this.instance.toneMappingExposure = 0.65;

    this.instance.shadowMap.enabled = true;

    this.instance.shadowMap.type =
      THREE.PCFSoftShadowMap;


    this.instance.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    this.instance.setSize(
      window.innerWidth,
      window.innerHeight
    );

    this.instance.domElement.style.position = "fixed";

    this.instance.domElement.style.inset = "0";

    this.instance.domElement.style.width = "100%";

    this.instance.domElement.style.height = "100%";

    this.instance.domElement.style.pointerEvents =
      "none";
  }

  resize() {
    const ratio =
      window.innerWidth < 768
        ? Math.min(window.devicePixelRatio, 1.5)
        : Math.min(window.devicePixelRatio, 2);

    this.instance.setPixelRatio(ratio);

    this.instance.setSize(
      window.innerWidth,
      window.innerHeight
    );
  }

  dispose() {
    this.instance.dispose();
  }
}