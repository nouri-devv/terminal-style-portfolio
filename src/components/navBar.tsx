import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#010760] p-5 border-b border-green-400 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <a
            href="#home"
            className="flex items-center text-green-400 text-lg font-bold cursor-pointer hover:text-green-300"
          >
            <span className="text-green-600">$</span>
            <span className="ml-2">MOSTAFA NOURI</span>
            <span className="ml-1.5 h-5 w-[3px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#020a7c] transition-colors"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-x-6">
          {["home", "experience", "projects", "education"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="flex items-center text-green-400 py-2 cursor-pointer hover:text-green-300 group"
            >
              <span className="text-green-600 mr-2 group-hover:text-green-400">
                $
              </span>
              {item}
              <span className="ml-1.5 h-4 w-[2px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
            </a>
          ))}
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#010760] md:hidden border-b border-green-400 border-green-400">
            <div className="p-4 space-y-4">
              {["home", "experience", "projects", "education"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center text-green-400 py-2 cursor-pointer hover:text-green-300 group"
                >
                  <span className="text-green-600 mr-2 group-hover:text-green-400">
                    $
                  </span>
                  {item}
                  <span className="ml-1.5 h-4 w-[2px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
