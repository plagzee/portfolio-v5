import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

class ThreeManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private canvas: HTMLCanvasElement;
  private width: number;
  private height: number;
  private loader: GLTFLoader;
  private rgbeLoader: RGBELoader;
  private dracoLoader: DRACOLoader;
  private clock: THREE.Clock;
  private mixers: THREE.AnimationMixer[] = [];
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.loader = new GLTFLoader();
    this.rgbeLoader = new RGBELoader();
    this.dracoLoader = new DRACOLoader();
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Set up draco loader for DRACOLoader support
    this.dracoLoader.setDecoderPath('/draco/');
    this.loader.setDRACOLoader(this.dracoLoader);

    this.setSize();
    window.addEventListener('resize', this.onWindowResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  private setSize() {
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  private onWindowResize() {
    this.setSize();
  }

  private onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / this.width) * 2 - 1;
    this.mouse.y = -(event.clientY / this.height) * 2 + 1;
  }

  public loadHDR(url: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      this.rgbeLoader.load(url, (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        resolve(texture);
      }, undefined, reject);
    });
  }

  public loadGLTF(url: string): Promise<GLTF> {
    return new Promise((resolve, reject) => {
      this.loader.load(url, resolve, undefined, reject);
    });
  }

  public add(object: THREE.Object3D) {
    this.scene.add(object);
  }

  public remove(object: THREE.Object3D) {
    this.scene.remove(object);
  }

  public setBackground(color: THREE.Color | THREE.Texture) {
    if (color instanceof THREE.Color) {
      this.scene.background = color;
    } else {
      this.scene.background = color;
    }
  }

  public setEnvironmentMap(texture: THREE.Texture) {
    this.scene.environment = texture;
    this.scene.background = texture;
  }

  public animate() {
    const delta = this.clock.getDelta();
    this.mixers.forEach(mixer => mixer.update(delta));
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.animate());
  }

  public startAnimationLoop() {
    this.animate();
  }

  public dispose() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    this.renderer.dispose();
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });
  }

  public getScene() {
    return this.scene;
  }

  public getCamera() {
    return this.camera;
  }

  public getRenderer() {
    return this.renderer;
  }

  public getRaycaster() {
    return this.raycaster;
  }

  public getMouse() {
    return this.mouse;
  }

  public addMixer(mixer: THREE.AnimationMixer) {
    this.mixers.push(mixer);
  }
}

export default ThreeManager;