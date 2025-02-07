import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Model from "./Model";

export const Contact = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section 
      id="contact" 
      className="relative min-h-screen bg-background/0 mt-20 pt-16 overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      >
        <source 
          src="/assets/black_hole.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      {/*<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/20 opacity-80" />*/}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/*<Model className="absolute lg:min-h-screen lg:m-auto lg:flex lg:items-center lg:justify-center mt-56 overflow-hidden" />*/}  

        <h2 className="mb-12 text-center font-space text-4xl font-bold text-foreground">
          Contato
        </h2>
        <Card className="mx-auto max-w-2xl bg-card/70 p-8 backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <Input
                placeholder="Seu nome"
                className="border-primary/20 bg-background/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Seu email"
                className="border-primary/20 bg-background/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Sua mensagem"
                className="min-h-[150px] border-primary/20 bg-background/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
              />
            </div>
            <Button className="w-full bg-primary text-foreground hover:bg-primary/80">
              Enviar Mensagem
            </Button>
          </form>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href="https://github.com/pgerbassi" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href="https://www.linkedin.com/in/pablo-gerbassi-desenvolvedor/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href="https://x.com/bibitocsg" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};