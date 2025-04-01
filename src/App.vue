<script setup>
// 引入Three.js
import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0.9; // 将相机沿Z轴向后移动，以便看到场景

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建一个立方体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// 将立方体添加到场景中
scene.add(cube);

// 动画函数
function animate() {
  requestAnimationFrame(animate);

  // 让立方体绕Z轴旋转
  cube.rotation.z += 0.01;

  // 渲染场景
  renderer.render(scene, camera);
}

animate();
</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
