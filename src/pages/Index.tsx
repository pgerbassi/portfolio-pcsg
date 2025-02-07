import React, { useState, useRef, useEffect } from 'react';
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import HeroModel2 from "@/components/HeroModel2";
import { Volume2, VolumeX } from 'lucide-react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Default low volume
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
        setIsPlaying(false);
      } else {
        audioElement.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error('Error playing audio:', error);
            alert('Unable to play background music. Please check browser permissions.');
          });
      }
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    // Set initial volume
    audioElement.volume = volume;

    // Autoplay with user interaction
    const handleFirstInteraction = () => {
      if (audioElement && !isPlaying) {
        audioElement.play()
          .then(() => {
            setIsPlaying(true);
            console.log('Audio started successfully');
          })
          .catch(error => {
            console.error('Autoplay was prevented:', error);
          });
      }
      
      // Remove the event listener after first interaction
      document.removeEventListener('click', handleFirstInteraction);
    };

    // Add event listener for first user interaction
    document.addEventListener('click', handleFirstInteraction);

    // Error handling
    audioElement.addEventListener('error', (e) => {
      console.error('Audio error:', e);
      setIsPlaying(false);
    });

    // Cleanup
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      audioElement.removeEventListener('error', () => {});
    };
  }, []);

  return (
    <main className="bg-background relative">
      {/* Audio Player */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        src="/assets/interstellar-theme.mp3"
        className="hidden"
      />

      {/* Audio Control Button */}
      <button 
        onClick={toggleAudio}
        className="fixed bottom-4 right-4 z-50 bg-primary/20 p-2 rounded-full hover:bg-primary/40 transition-all"
        aria-label={isPlaying ? "Pause Background Music" : "Play Background Music"}
      >
        {isPlaying ? <Volume2 className="text-foreground" /> : <VolumeX className="text-foreground" />}
      </button>

      <HeroModel2 className="absolute z-9 justify-center object-center"/>
      <Hero />
      <About />
      <Projects />
      <Work />
      <Contact />
    </main>
  );
};

export default Index;