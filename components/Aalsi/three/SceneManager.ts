"use client";

import * as THREE from "three";

import { Camera } from "./Camera";
import { FloatingObject } from "./FloatingObject";
import { Lights } from "./Lights";
import { ParticleSystem } from "./ParticleSystem";
import { PostProcessing } from "./PostProcessing";
import { Renderer } from "./Renderer";
import { Environment } from "./Environment";

export class SceneManager {
  /* -------------------------------------------------------------------------- */
  /* Public */
  /* -------------------------------------------------------------------------- */

  public scene: THREE.Scene;

  public renderer: THREE.WebGLRenderer;

  public camera: Camera;

  public lights: Lights;

  public orb: FloatingObject;

  public particles: ParticleSystem;

  public composer: PostProcessing;

  public environment!: Environment;

  /* -------------------------------------------------------------------------- */
  /* Private */
  /* -------------------------------------------------------------------------- */

  private rendererManager: Renderer;

  private readonly container: HTMLDivElement;

  private readonly clock = new THREE.Clock();

  private readonly mouse = new THREE.Vector2();

  private readonly targetMouse = new THREE.Vector2();

  private animationFrame = 0;

  private paused = false;

  constructor(container: HTMLDivElement) {
    this.container = container;

    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color("#050505");

    this.rendererManager = new Renderer();

    this.renderer = this.rendererManager.instance;

    this.camera = new Camera();

    this.lights = new Lights(this.scene);

    this.orb = new FloatingObject(this.scene);

    this.particles = new ParticleSystem(this.scene);

    this.composer = new PostProcessing(
      this.renderer,
      this.scene,
      this.camera.instance
    );

    this.environment = new Environment(this.scene);
  }



  /* -------------------------------------------------------------------------- */
  /* Init */
  /* -------------------------------------------------------------------------- */

  public async init() {
    await this.environment.load();

    this.container.appendChild(this.renderer.domElement);

    this.registerEvents();

    this.onResize();

    this.animate();
  }
  /* -------------------------------------------------------------------------- */
  /* Events */
  /* -------------------------------------------------------------------------- */

  private registerEvents() {
    window.addEventListener(
      "mousemove",
      this.handleMouseMove,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      this.onResize,
      { passive: true }
    );

    document.addEventListener(
      "visibilitychange",
      this.handleVisibility
    );
  }

  private unregisterEvents() {
    window.removeEventListener(
      "mousemove",
      this.handleMouseMove
    );

    window.removeEventListener(
      "resize",
      this.onResize
    );

    document.removeEventListener(
      "visibilitychange",
      this.handleVisibility
    );
  }

  private handleMouseMove = (event: MouseEvent) => {
    this.targetMouse.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );
  };

  private handleVisibility = () => {
    this.paused = document.hidden;

    if (!this.paused) {
      this.clock.getDelta();
      this.animate();
    }
  };

  /* -------------------------------------------------------------------------- */
  /* Resize */
  /* -------------------------------------------------------------------------- */

  public onResize = () => {
    this.rendererManager.resize();

    this.camera.resize();

    this.composer.resize();

    this.orb.resize(window.innerWidth);

    this.particles.resize(window.innerWidth);
  };

  /* -------------------------------------------------------------------------- */
  /* Animation Loop */
  /* -------------------------------------------------------------------------- */

  private animate = () => {
    if (this.paused) return;

    this.animationFrame = requestAnimationFrame(
      this.animate
    );

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    // Smooth mouse interpolation
    this.mouse.lerp(this.targetMouse, 0.06);

    // Camera
    this.camera.update(this.mouse);

    // World
    this.orb.update(
      delta,
      elapsed,
      this.mouse
    );

    this.particles.update(
      delta,
      elapsed
    );

    this.lights.update(
      this.mouse
    );

    // Final Render
    this.composer.render(delta);
  };

  /* -------------------------------------------------------------------------- */
  /* Public Controls */
  /* -------------------------------------------------------------------------- */

  public pause() {
    this.paused = true;

    cancelAnimationFrame(
      this.animationFrame
    );
  }

  public resume() {
    if (!this.paused) return;

    this.paused = false;

    this.clock.getDelta();

    this.animate();
  }

  public setBackground(
    color: THREE.ColorRepresentation
  ) {
    this.scene.background =
      new THREE.Color(color);
  }

  /* -------------------------------------------------------------------------- */
  /* Future Scroll Hooks */
  /* -------------------------------------------------------------------------- */

  public hero() {
    this.camera.toHero();

    this.lights.hero();

    this.particles.fadeIn();

    this.orb.reset();
  }

  public portfolio() {
    this.camera.toPortfolio();

    this.lights.portfolio();

    this.particles.tighten();
  }

  public services() {
    this.camera.toServices();

    this.particles.expand();
  }

  public gallery() {
    this.camera.toGallery();

    this.lights.gallery();
  }

  public cta() {
    this.camera.toCTA();

    this.lights.cta();

    this.particles.scatter();
  }

  /* -------------------------------------------------------------------------- */
  /* Cleanup */
  /* -------------------------------------------------------------------------- */

  public destroy() {
    cancelAnimationFrame(
      this.animationFrame
    );

    this.unregisterEvents();

    this.orb.dispose();

    this.particles.dispose();

    this.rendererManager.dispose();

    if (
      this.renderer.domElement.parentNode ===
      this.container
    ) {
      this.container.removeChild(
        this.renderer.domElement
      );
    }

    this.scene.clear();
  }
}