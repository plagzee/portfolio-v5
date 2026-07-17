import * as THREE from "three";
import gsap from "gsap";

export class Camera {
  public instance: THREE.PerspectiveCamera;

  private target = new THREE.Vector3(0, 0, 0);

  private currentLookAt = new THREE.Vector3(0, 0, 0);

  private basePosition = new THREE.Vector3(0, 0, 6);

  constructor() {
    this.instance = new THREE.PerspectiveCamera(
      this.getFov(),
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    this.instance.position.copy(this.basePosition);

    this.instance.lookAt(this.target);
  }

  // ------------------------------------
  // RESPONSIVE FOV
  // ------------------------------------

  private getFov() {
    if (window.innerWidth < 640) return 60;
    if (window.innerWidth < 1024) return 52;
    return 45;
  }

  // ------------------------------------
  // UPDATE LOOP
  // ------------------------------------

  public update(mouse: THREE.Vector2) {
    const targetX = this.basePosition.x + mouse.x * 0.25;
    const targetY = this.basePosition.y + mouse.y * 0.18;

    this.instance.position.x +=
      (targetX - this.instance.position.x) * 0.05;

    this.instance.position.y +=
      (targetY - this.instance.position.y) * 0.05;

    this.currentLookAt.lerp(this.target, 0.06);

    this.instance.lookAt(this.currentLookAt);
  }

  // ------------------------------------
  // SCROLL DESTINATIONS
  // ------------------------------------

  public toHero() {
    gsap.to(this.instance.position, {
      x: 0,
      y: 0,
      z: 6,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(this.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
    });

    this.basePosition.set(0, 0, 6);
  }

  public toPortfolio() {
    gsap.to(this.instance.position, {
      x: 1.2,
      y: 0.4,
      z: 4.5,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(this.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
    });

    this.basePosition.set(1.2, 0.4, 4.5);
  }

  public toServices() {
    gsap.to(this.instance.position, {
      x: -1.4,
      y: 0.7,
      z: 4,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(this.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
    });

    this.basePosition.set(-1.4, 0.7, 4);
  }

  public toGallery() {
    gsap.to(this.instance.position, {
      x: 0,
      y: 1.2,
      z: 3,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(this.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
    });

    this.basePosition.set(0, 1.2, 3);
  }

  public toCTA() {
    gsap.to(this.instance.position, {
      x: 0,
      y: 0,
      z: 8,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(this.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
    });

    this.basePosition.set(0, 0, 8);
  }

  // ------------------------------------
  // MANUAL MOVES
  // ------------------------------------

  public moveTo(
    position: THREE.Vector3,
    lookAt: THREE.Vector3,
    duration = 2
  ) {
    gsap.to(this.instance.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration,
      ease: "power3.inOut",
    });

    gsap.to(this.target, {
      x: lookAt.x,
      y: lookAt.y,
      z: lookAt.z,
      duration,
      ease: "power3.inOut",
    });

    this.basePosition.copy(position);
  }

  // ------------------------------------
  // RESIZE
  // ------------------------------------

  public resize() {
    this.instance.aspect =
      window.innerWidth / window.innerHeight;

    this.instance.fov = this.getFov();

    this.instance.updateProjectionMatrix();
  }
}