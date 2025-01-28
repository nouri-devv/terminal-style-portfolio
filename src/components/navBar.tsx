import resumeData from "../reasume.json";

const NavBar = () => {
  return (
    <nav className="bg-[#010760] p-5 border-b border-green-400">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a
          href="#home"
          className="flex items-center text-green-400 text-lg font-bold cursor-pointer hover:text-green-300"
        >
          <span className="text-green-600">$</span>
          <span className="ml-2">{resumeData.name}</span>
          <span className="ml-1.5 h-5 w-[3px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
        </a>

        <div className="flex items-center gap-x-6">
          <a
            href="#home"
            className="flex items-center text-green-400 py-2 cursor-pointer hover:text-green-300 group"
          >
            <span className="text-green-600 mr-2 group-hover:text-green-400">
              $
            </span>
            home
            <span className="ml-1.5 h-4 w-[2px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
          </a>
          <a
            href="#experience"
            className="flex items-center text-green-400 py-2 cursor-pointer hover:text-green-300 group"
          >
            <span className="text-green-600 mr-2 group-hover:text-green-400">
              $
            </span>
            experience
            <span className="ml-1.5 h-4 w-[2px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
          </a>
          <a
            href="#projects"
            className="flex items-center text-green-400 py-2 cursor-pointer hover:text-green-300 group"
          >
            <span className="text-green-600 mr-2 group-hover:text-green-400">
              $
            </span>
            projects
            <span className="ml-1.5 h-4 w-[2px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
          </a>
          <a
            href="#education"
            className="flex items-center text-green-400 py-2 cursor-pointer hover:text-green-300 group"
          >
            <span className="text-green-600 mr-2 group-hover:text-green-400">
              $
            </span>
            education
            <span className="ml-1.5 h-4 w-[2px] bg-green-500 animate-[blink_1s_step-end_infinite]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
