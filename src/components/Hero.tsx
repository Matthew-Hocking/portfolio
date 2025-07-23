import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

const Hero = () => {
  return (
    <section id="hero">
      <div className="min-h-screen bg-gradient-to-t from-neutral-800 to-neutral-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center max-w-7xl">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-neutral-300 font-mono tracking-wide">
                  Hey there, I'm
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-none">
                  Matthew
                  <br/>
                  Hocking
                </h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-yellow-400 font-mono font-medium">
                  Fullstack Developer
                </p>
              </div>
              <p className="text-lg text-neutral-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Crafting digital experiences with modern technologies and creative problem-solving.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end space-y-8">
              
              <div className="flex flex-col w-full max-w-sm space-y-4">
                <button className="w-full py-4 px-8 bg-yellow-400 text-zinc-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
                <button className="w-full py-4 px-8 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400 hover:text-zinc-900 transform hover:scale-[1.02] transition-all duration-300">
                  Get In Touch
                </button>
              </div>

              <div className="flex space-x-4">
                <div className="group">
                  <SocialIcon
                    aria-label="My LinkedIn Profile"
                    url="https://www.linkedin.com/in/matthew-rsc-hocking/"
                    target="_blank"
                    bgColor="#0A66C2"
                    fgColor="#FFFFFF"
                  />
                </div>
                <div className="group">
                  <SocialIcon
                    aria-label="My GitHub Profile"
                    url="https://github.com/Matthew-Hocking"
                    target="_blank"
                    bgColor="#181717"
                    fgColor="#FFFFFF"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;