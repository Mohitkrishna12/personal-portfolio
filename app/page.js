"use client"
import React, { useEffect, useRef } from 'react'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Home = () => {
  const sceneRef = useRef();
  const renderer = new THREE.WebGLRenderer();

  useEffect(()=>{
    renderer.setSize(window.innerWidth,window.innerHeight,true);
    sceneRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    const scene = new THREE.Scene();

    const orbit = new OrbitControls(camera,renderer.domElement);

    const mesh = new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial({color:"red"}));
    scene.add(mesh);

    camera.position.set(0,0,20);
    orbit.update();

    const animate = () =>{
      renderer.render(scene,camera);
      requestAnimationFrame(animate);
    }

    animate();

  },[]);


  return <div className="App" ref={sceneRef} />;
}

export default Home