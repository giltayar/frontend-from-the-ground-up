import * as THREE from './node_modules/three/build/three.module.js'

const width = 300
const height = 300

// init

const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10)
camera.position.z = 1

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
const material = new THREE.MeshNormalMaterial()

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(width, height)
renderer.setClearAlpha(0);
renderer.setAnimationLoop(animation)

export const domElement = renderer.domElement

// animation

function animation(time) {
  mesh.rotation.x = time / 2000
  mesh.rotation.y = time / 1000

  renderer.render(scene, camera)
}
