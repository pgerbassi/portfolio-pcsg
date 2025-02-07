import HeroModel3 from "./HeroModel3";
import { Card } from "./ui/card";

interface TechStack {
  category: string;
  technologies: string[];
}

const frontendStack: TechStack = {
  category: "Frontend",
  technologies: [
    "React",
    "TypeScript",
    "Next.js",
    "Three.js",
    "Tailwind CSS",
    "Framer Motion",
  ],
};

const backendStack: TechStack = {
  category: "Backend",
  technologies: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "AWS",
  ],
};

export const About = () => {
  return (
    <section id="about" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-space text-4xl font-bold text-foreground">
          Sobre Mim
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-square overflow-hidden rounded-lg bg-card backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02]">
              <img
                src="/eusera.png"
                alt="Pablo Gerbassi"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <Card className="flex flex-col justify-center content-center items-center space-y-4 bg-card p-8 backdrop-blur-sm">
            <p className="animate-fade-in font-space text-lg text-foreground/80">
              Sou um desenvolvedor full-stack apaixonado por criar experiências web únicas e interativas. Com expertise em React e Three.js, combino design e tecnologia para dar vida a interfaces modernas e imersivas.
            </p>
            <p className="animate-fade-in font-space text-lg text-foreground/80 pb-5">
              Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam, e hoje se transformou em uma busca constante por inovação e excelência técnica.
            </p>
            <HeroModel3/>
          </Card>
        </div>

        {/* Tech Stacks */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Frontend Stack */}
          <div className="group relative overflow-hidden">
            <Card className="relative overflow-hidden border-primary/20 bg-card/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_2rem_-0.5rem_#0EA5E9]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
              <h3 className="mb-6 font-space text-2xl font-bold text-primary">
                {frontendStack.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendStack.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-center font-space text-sm text-primary/80 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary">
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Backend Stack */}
          <div className="group relative overflow-hidden">
            <Card className="relative overflow-hidden border-secondary/20 bg-card/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-secondary/40 hover:shadow-[0_0_2rem_-0.5rem_#8B5CF6]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-50" />
              <h3 className="mb-6 font-space text-2xl font-bold text-secondary">
                {backendStack.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backendStack.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="rounded-lg border border-secondary/20 bg-secondary/5 p-3 text-center font-space text-sm text-secondary/80 transition-all duration-300 hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary">
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};