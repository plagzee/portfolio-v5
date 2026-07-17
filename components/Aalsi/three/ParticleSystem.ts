import * as THREE from "three";

export class ParticleSystem {
  private scene: THREE.Scene;

  public points!: THREE.Points;

  private geometry!: THREE.BufferGeometry;

  private material!: THREE.PointsMaterial;

  private positions!: Float32Array;

  private velocities!: Float32Array;

  private count: number;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.count = window.innerWidth < 768 ? 2500 : 8000;

    this.create();
  }

  private create() {
    this.geometry = new THREE.BufferGeometry();

    this.positions = new Float32Array(this.count * 3);

    this.velocities = new Float32Array(this.count * 3);

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      this.positions[i3] = (Math.random() - 0.5) * 20;

      this.positions[i3 + 1] = (Math.random() - 0.5) * 12;

      this.positions[i3 + 2] = (Math.random() - 0.5) * 20;

      this.velocities[i3] = (Math.random() - 0.5) * 0.002;

      this.velocities[i3 + 1] = Math.random() * 0.003;

      this.velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.positions, 3)
    );

    this.material = new THREE.PointsMaterial({
      color: 0xffffff,

      size: window.innerWidth < 768 ? 0.018 : 0.022,

      transparent: true,

      opacity: 0.55,

      depthWrite: false,

      blending: THREE.AdditiveBlending,

      sizeAttenuation: true,
    });

    this.points = new THREE.Points(
      this.geometry,
      this.material
    );

    this.scene.add(this.points);
  }

  update(delta: number, elapsed: number) {
    const array = this.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      array[i3] += this.velocities[i3];

      array[i3 + 1] +=
        this.velocities[i3 + 1] +
        Math.sin(elapsed + i * 0.05) * 0.0007;

      array[i3 + 2] += this.velocities[i3 + 2];

      if (array[i3 + 1] > 7) {
        array[i3 + 1] = -7;
      }

      if (array[i3 + 1] < -7) {
        array[i3 + 1] = 7;
      }

      if (array[i3] > 10) array[i3] = -10;
      if (array[i3] < -10) array[i3] = 10;

      if (array[i3 + 2] > 10) array[i3 + 2] = -10;
      if (array[i3 + 2] < -10) array[i3 + 2] = 10;
    }

    this.geometry.attributes.position.needsUpdate = true;

    this.points.rotation.y += delta * 0.015;
  }

  public resize(width: number) {
    this.material.size =
      width < 768
        ? 0.018
        : 0.022;
  }

  // -----------------------------
  // Future Scroll Effects
  // -----------------------------

  public scatter() {
    const array =
      this.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      array[i3] += (Math.random() - 0.5) * 3;

      array[i3 + 1] += (Math.random() - 0.5) * 3;

      array[i3 + 2] += (Math.random() - 0.5) * 3;
    }

    this.geometry.attributes.position.needsUpdate = true;
  }

  public tighten() {
    this.points.scale.setScalar(0.7);
  }

  public expand() {
    this.points.scale.setScalar(1.4);
  }

  public fadeOut() {
    this.material.opacity = 0;
  }

  public fadeIn() {
    this.material.opacity = 0.55;
  }

  dispose() {
    this.geometry.dispose();

    this.material.dispose();

    this.scene.remove(this.points);
  }
}