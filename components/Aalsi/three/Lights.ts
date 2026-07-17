import * as THREE from "three";
import gsap from "gsap";

export class Lights {
  private scene: THREE.Scene;

  public ambient: THREE.AmbientLight;
  public key: THREE.DirectionalLight;
  public rim: THREE.DirectionalLight;
  public fill: THREE.PointLight;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.ambient = new THREE.AmbientLight(
      0xffffff,
      0.2
    );

    this.key = new THREE.DirectionalLight(
      0xffffff,
      1.2
    );

    this.rim = new THREE.DirectionalLight(
      "#8b5cf6",
      0.5
    );

    this.fill = new THREE.PointLight(
      "#60a5fa",
      2,
      20
    );

    this.setup();
  }

  private setup() {
    this.key.position.set(6, 5, 8);

    this.key.castShadow = true;

    this.key.shadow.mapSize.set(2048, 2048);

    this.key.shadow.bias = -0.0002;

    this.rim.position.set(-6, 3, -5);

    this.fill.position.set(0, 0, 4);

    this.scene.add(
      this.ambient,
      this.key,
      this.rim,
      this.fill
    );
  }

  update(mouse: THREE.Vector2) {
    this.fill.position.x +=
      ((mouse.x * 3) - this.fill.position.x) *
      0.05;

    this.fill.position.y +=
      ((mouse.y * 2) - this.fill.position.y) *
      0.05;
  }

  hero() {
    gsap.to(this.fill.color, {
      r: 0.4,
      g: 0.7,
      b: 1,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(this.fill.color, {
      r: 0.4,
      g: 0.7,
      b: 1,
      duration: 2
    });
  }

  portfolio() {
    gsap.to(this.fill.color, {
      r: 1,
      g: 0.45,
      b: 0.8,
      duration: 2
    });

    gsap.to(this.key.position, {
      x: 2,
      y: 7,
      z: 6,
      duration: 2
    });
  }

  gallery() {
    gsap.to(this.fill.color, {
      r: 0.3,
      g: 1,
      b: 0.8,
      duration: 2
    });

    gsap.to(this.key.position, {
      x: -4,
      y: 4,
      z: 5,
      duration: 2
    });
  }

  public cta() {
    gsap.to(this.fill, {
      intensity: 4,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(this.ambient, {
      intensity: 0.6,
      duration: 2,
      ease: "power2.inOut",
    });
  }
}