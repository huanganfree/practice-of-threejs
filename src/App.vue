<script setup lang="ts">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import mesh from './model/mesh.js';
import points from './model/points.js';
import line from './model/line.js';
import RandomMountain, {updatePosition} from './model/RandomMountain.js';
import Texture from './model/texturePlaneGeometry.js';
import TextureShareGeometry from './model/textureShapeGeometry.js';
import ellipseCurve from './model/EllipseCurve.ts';
import splineCurve from './model/SplineCurve.js';
import latheMesh from './model/LatheGeometry.js';

const scene = new THREE.Scene();
  
// scene.add(ellipseCurve);
// scene.add(splineCurve);
scene.add(latheMesh);

const pointLight = new THREE.PointLight(0xffffff, 10000);
pointLight.position.set(80, 80, 80);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);


const axesHelper = new THREE.AxesHelper(300);
scene.add(axesHelper);

const width = 800;
const height = 400;

const camera = new THREE.PerspectiveCamera(54, width / height, 1, 100000);
camera.position.set(50, 10, 400);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height)

// 渲染器
render();
function render() {
  // TextureShareGeometry.material.map.offset.x += 0.001;
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
