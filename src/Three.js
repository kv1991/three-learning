import React from 'react';
import * as THREE from 'three';

export default function Three() {
  React.useEffect(() => {
    const renderer = new THREE.WebGL1Renderer();
    const scene = new THREE.Scene();

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line( geometry, lineMaterial );
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh( geometry, material );

    const canvasWrapper = document.querySelector('.canvas-wrapper');
    console.log('canvasWrapper: ', canvasWrapper);
    let camera = null;
    if (!!canvasWrapper) {
      camera = new THREE.PerspectiveCamera(75, canvasWrapper.offsetWidth / window.innerHeight, 0.1, 500);
      renderer.setSize(canvasWrapper.offsetWidth, window.innerHeight);
      camera.position.set(0, 0, 100);
      canvasWrapper.appendChild(renderer.domElement);
      scene.add(line);
    }
    
    function animate() {
      // requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate();
    return () => {
      console.log('Component will unmount.')
    }
  });

  return (
    <div className="canvas-wrapper"></div>
  );
}