<script setup lang="ts">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import mesh from './model/mesh.js';
import points from './model/points.js';
import line from './model/line.js';
import RandomMountain, {updatePosition} from './model/RandomMountain.js';
import Texture from './model/Texture.js';

const scene = new THREE.Scene();
  
scene.add(Texture);

const pointLight = new THREE.PointLight(0xffffff, 10000);
pointLight.position.set(80, 80, 80);
scene.add(pointLight);

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(54, width / height, 1, 100000);
camera.position.set(240, 120, 240);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)

// 渲染器
render();
function render() {
  updatePosition()
  RandomMountain.rotateZ(0.001);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

document.body.appendChild(renderer.domElement);

// 轨道控制线
const controls = new OrbitControls(camera, renderer.domElement);


</script>

<template>
  <div>
  </div>
</template>

<style scoped lang="less"></style>
