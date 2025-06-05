import * as THREE from 'three';
import img from '../assets/timeTunnel.png';

const loader = new THREE.TextureLoader();

const texture = loader.load(img);
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = 20;
texture.colorSpace = THREE.SRGBColorSpace;


const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-100, 20, 90),
    new THREE.Vector3(-40, 80, 100),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(60, -60, 0),
    new THREE.Vector3(100, -40, 80),
    new THREE.Vector3(150, 60, 60)
]);

const geometry = new THREE.TubeGeometry(path, 100, 5, 30);


const material = new THREE.MeshBasicMaterial({
    // color: 'orange',
    // wireframe: true,
    map: texture,
    side: THREE.DoubleSide,
    aoMap: texture,
});
const timeTunnelMesh = new THREE.Mesh(geometry, material);

export const tubePoints = path.getSpacedPoints(1000); // 获取管道的点
console.log('tubePoints', tubePoints);

let i = 0;

export function cameraMove(camera) {
    if (i < tubePoints.length - 1) {
        camera.position.copy(tubePoints[i]);
        camera.lookAt(tubePoints[i + 1]);
        i += 1;
    } else {
        i = 0;
    }
}

export default timeTunnelMesh;