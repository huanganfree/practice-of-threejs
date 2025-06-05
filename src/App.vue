<script setup lang="ts">
import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import mesh from './model/mesh.js';
import points from './model/points.js';
import line from './model/line.js';
import RandomMountain, {updatePosition} from './model/RandomMountain.js';
import Texture from './model/texturePlaneGeometry.js';
import TextureShareGeometry from './model/textureShapeGeometry.js';
import ellipseCurve from './model/EllipseCurve.js';
import splineCurve from './model/SplineCurve.js';
import latheMesh from './model/LatheGeometry.js';
import tubeMesh from './model/TubeGeometry.js';
import timeTunnelMesh, { cameraMove } from './model/timeTunnel.ts';
import cylinderMesh from './model/uvCylinder.ts';
import buildHouseMesh from './model/buildHouse.ts';



const scene = new THREE.Scene();
// scene.add(ellipseCurve);
// scene.add(splineCurve);
// scene.add(latheMesh);
// scene.add(timeTunnelMesh);
scene.add(cylinderMesh)


const pointLight = new THREE.PointLight(0xffffff, 10000);
pointLight.position.set(80, 80, 80);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);


const axesHelper = new THREE.AxesHelper(3200);
scene.add(axesHelper);

const width = 1000;
const height = 600;

const camera = new THREE.PerspectiveCamera(54, width / height, 1, 100000);
camera.position.set(-1, -105, 0);

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height)

// 渲染器
render();
function render() {
  // cameraMove(camera);
  cylinderMesh.material.map!.offset.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

document.body.appendChild(renderer.domElement);

// 轨道控制线
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {
  console.log(camera.position);
});


</script>

<template>
  <div>
  </div>
</template>

<style scoped lang="less"></style>
