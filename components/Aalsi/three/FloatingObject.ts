import * as THREE from "three";

export class FloatingObject {
  private scene: THREE.Scene;

  public mesh!: THREE.Mesh;

  private geometry!: THREE.IcosahedronGeometry;

  private material!: THREE.ShaderMaterial;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.create();
  }

  private create() {
    const detail = window.innerWidth < 768 ? 32 : 64;

    this.geometry = new THREE.IcosahedronGeometry(
      1.35,
      detail
    );

    this.material = new THREE.ShaderMaterial({
      transparent: false,

      uniforms: {
        uTime: {
          value: 0,
        },

        uMouse: {
          value: new THREE.Vector2(),
        },

        uColor: {
          value: new THREE.Color("#ffffff"),
        },

        uGlow: {
          value: new THREE.Color("#8b5cf6"),
        },
      },

      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;

        varying vec3 vNormal;
        varying vec3 vWorldPos;

        void main(){

            vNormal = normalize(normalMatrix * normal);

            vec3 p = position;

            float wave =
                sin(p.y * 4.0 + uTime * 1.5) * 0.05;

            wave +=
                cos(p.x * 5.0 + uTime) * 0.04;

            wave +=
                sin(p.z * 6.0 - uTime) * 0.03;

            wave +=
                uMouse.x * 0.02;

            p += normal * wave;

            vec4 world =
                modelMatrix * vec4(p,1.0);

            vWorldPos = world.xyz;

            gl_Position =
                projectionMatrix *
                viewMatrix *
                world;

        }
      `,

      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uGlow;

        varying vec3 vNormal;
        varying vec3 vWorldPos;

        void main(){

            vec3 N = normalize(vNormal);

            vec3 L = normalize(vec3(0.5,1.0,0.7));

            float diffuse =
                max(dot(N,L),0.0);

            vec3 V =
                normalize(cameraPosition-vWorldPos);

            float fresnel =
                pow(
                    1.0-max(dot(V,N),0.0),
                    3.0
                );

            vec3 color =
                mix(
                    uColor,
                    uGlow,
                    fresnel
                );

            color *=
                diffuse + 0.25;

            color +=
                fresnel * 0.55;

            gl_FragColor =
                vec4(color,1.0);

        }
      `,
    });

    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );

    this.mesh.castShadow = true;

    this.mesh.receiveShadow = true;

    this.scene.add(this.mesh);
  }

  update(
    delta: number,
    elapsed: number,
    mouse: THREE.Vector2
  ) {
    this.material.uniforms.uTime.value =
      elapsed;

    this.material.uniforms.uMouse.value
      .lerp(mouse, 0.08);

    this.mesh.rotation.y +=
      delta * 0.22;

    this.mesh.rotation.x +=
      delta * 0.04;

    this.mesh.position.y =
      Math.sin(elapsed * 0.8) * 0.18;

    this.mesh.rotation.z +=
      (
        mouse.x * 0.25 -
        this.mesh.rotation.z
      ) *
      0.03;

    this.mesh.rotation.x +=
      (
        mouse.y * 0.18 -
        this.mesh.rotation.x
      ) *
      0.03;
  }

  resize(width: number) {
    const scale =
      width < 640
        ? 0.65
        : width < 1024
        ? 0.82
        : 1;

    this.mesh.scale.setScalar(scale);
  }

  public hero() {
    this.material.uniforms.uGlow.value.set(
      "#8b5cf6"
    );
  }

  public portfolio() {
    this.material.uniforms.uGlow.value.set(
      "#3b82f6"
    );
  }

  public services() {
    this.material.uniforms.uGlow.value.set(
      "#ec4899"
    );
  }

  public gallery() {
    this.material.uniforms.uGlow.value.set(
      "#14b8a6"
    );
  }

  public cta() {
    this.material.uniforms.uGlow.value.set(
      "#ffffff"
    );
  }

  reset() {
    this.mesh.scale.setScalar(1);
  }

  explode() {
    this.mesh.scale.setScalar(1.4);
  }

  dispose() {
    this.geometry.dispose();

    this.material.dispose();

    this.scene.remove(this.mesh);
  }
}