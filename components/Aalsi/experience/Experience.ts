import { SceneManager } from "../three/SceneManager";
import { ScrollController } from "./ScrollController";

export class Experience {
  private scene: SceneManager;

  private scroll!: ScrollController;

  constructor(scene: SceneManager) {
    this.scene = scene;
  }

  init() {
    this.scroll = new ScrollController(this.scene);

    this.scroll.init();
  }

  destroy() {
    this.scroll.destroy();
  }

  /* -------------------------------- */

  hero() {
    this.scene.hero();
  }

  portfolio() {
    this.scene.portfolio();
  }

  services() {
    this.scene.services();
  }

  gallery() {
    this.scene.gallery();
  }

  cta() {
    this.scene.cta();
  }
}