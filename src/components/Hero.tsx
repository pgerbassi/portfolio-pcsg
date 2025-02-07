import { useRef } from "react";
import * as THREE from "three";
import { Button } from "./ui/button";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /*useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x0EA5E9,
      wireframe: true
    });
    const torus = new THREE.Mesh(geometry, material);
    
    scene.add(torus);
    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);*/

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source 
          src="/assets/hero_video.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/20 opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4">
          <h1 className="mb-4 font-space text-4xl font-bold text-foreground md:text-8xl">
            <span className="inline-block animate-fade-in">Olá, eu sou</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pablo Gerbassi
            </span>
          </h1>
          <p className="mb-8 animate-fade-in font-space text-xl text-foreground/80 max-w-2xl mx-auto">
            Desenvolvedor Front-end | Especialista em React e Three.js
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              className="animate-fade-in bg-primary text-foreground hover:bg-primary/80"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              className="animate-fade-in border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};