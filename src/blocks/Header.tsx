import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-400 ${
      isScrolled
      ? 'bg-neutral-500/10 backdrop-blur-md shadow-lg'
      : ''
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <a href="#top" className="underline-hover text-sm md:text-lg lg:text-xl font-bold text-white hover:text-gray-200 transition-colors drop-shadow-sm">
              MH.
            </a>
          </div>
          <ul className="flex space-x-6 md:space-x-8 text-xs md:text-[16px]">
            <li>
              <a href="#about" className="underline-hover text-white/90 hover:text-white font-medium transition-colors drop-shadow-sm">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="underline-hover text-white/90 hover:text-white font-medium transition-colors drop-shadow-sm">
                Skills
              </a>
            </li>
            {/* Taking our "My journey for the meantime" */}
            {/* <li>
              <a href="#my-journey" className="underline-hover text-white/90 hover:text-white font-medium transition-colors drop-shadow-sm">
                My Journey
              </a>
            </li> */}
            <li>
              <a href="#projects" className="underline-hover text-white/90 hover:text-white font-medium transition-colors drop-shadow-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="underline-hover text-white/90 hover:text-white font-medium transition-colors drop-shadow-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;