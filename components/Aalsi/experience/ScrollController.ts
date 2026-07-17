import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SceneManager } from "../three/SceneManager";

gsap.registerPlugin(ScrollTrigger);

export class ScrollController {
  private scene: SceneManager;

  constructor(scene: SceneManager) {
    this.scene = scene;
  }

  init() {
    this.createHero();

    this.createPortfolio();

    this.createServices();

    this.createGallery();

    this.createCTA();
  }

  /* ---------------- HERO ---------------- */

  private createHero() {
    ScrollTrigger.create({
      trigger: "#aalsi-hero",

      start: "top top",

      end: "+=200%",

      scrub: true,

      pin: true,

      onUpdate: ({ progress }) => {
        this.scene.camera.instance.position.z =
          6 - progress * 2.4;

        this.scene.camera.instance.position.x =
          progress * 0.7;

        this.scene.orb.mesh.rotation.y =
          progress * Math.PI * 1.5;

        this.scene.orb.mesh.rotation.x =
          progress * 0.6;

        this.scene.orb.mesh.scale.setScalar(
          1 + progress * 0.5
        );
      },
    });
  }

  /* ---------------- PORTFOLIO ---------------- */

  private createPortfolio() {
    ScrollTrigger.create({
      trigger: "#portfolio",

      start: "top center",

      end: "bottom center",

      scrub: true,

      onEnter: () => {
        this.scene.portfolio();
      },

      onLeaveBack: () => {
        this.scene.hero();
      },
    });
  }

  /* ---------------- SERVICES ---------------- */

  private createServices() {
    ScrollTrigger.create({
      trigger: "#services",

      start: "top center",

      end: "bottom center",

      scrub: true,

      onEnter: () => {
        this.scene.services();
      },
    });
  }

  /* ---------------- GALLERY ---------------- */

  private createGallery() {
    ScrollTrigger.create({
      trigger: "#gallery",

      start: "top center",

      end: "bottom center",

      scrub: true,

      onEnter: () => {
        this.scene.gallery();
      },
    });
  }

  /* ---------------- CTA ---------------- */

  private createCTA() {
    ScrollTrigger.create({
      trigger: "#cta",

      start: "top center",

      end: "bottom bottom",

      scrub: true,

      onEnter: () => {
        this.scene.cta();
      },
    });
  }

  destroy() {
    ScrollTrigger.getAll().forEach((trigger) =>
      trigger.kill()
    );
  }
}