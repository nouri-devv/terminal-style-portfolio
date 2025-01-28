import resumeData from "../reasume.json";

const PageHero = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-green-400 text-3xl mb-4 flex items-center">
        <span className="text-green-600">$</span>
        <span className="ml-2">about_me</span>
        <span className="ml-1 h-6 w-[0.35rem] bg-green-500 animate-[blink_1s_step-end_infinite]" />
      </h1>
      <div className="border-l-1 border-green-400 pl-4 ml-2">
        <pre className="text-green-500 text-xs mb-4">
          {/* Go to https://fsymbols.com/generators/carty/ to generate the art and paste below */}
          {`
███╗░░██╗░█████╗░███╗░░░███╗███████╗  ██╗░░██╗███████╗██████╗░███████╗
████╗░██║██╔══██╗████╗░████║██╔════╝  ██║░░██║██╔════╝██╔══██╗██╔════╝
██╔██╗██║███████║██╔████╔██║█████╗░░  ███████║█████╗░░██████╔╝█████╗░░
██║╚████║██╔══██║██║╚██╔╝██║██╔══╝░░  ██╔══██║██╔══╝░░██╔══██╗██╔══╝░░
██║░╚███║██║░░██║██║░╚═╝░██║███████╗  ██║░░██║███████╗██║░░██║███████╗
╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝  ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝`}
        </pre>
        <p className="text-gray-400">{resumeData.statement}</p>

        {/* About Section */}
        <div className="mt-4 text-gray-400">
          <p className="mb-4">{resumeData.about}</p>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-4 text-gray-400">
          <p className="mb-2"> Tech = [</p>
          {/* languages */}
          <p className="ml-4">
            {resumeData.tech.languages.map((lang) => `"${lang}"`).join(", ")}
          </p>
          {/* frameworks */}
          <p className="ml-4">
            {resumeData.tech.frameworks
              .map((framework) => `"${framework}"`)
              .join(", ")}
          </p>
          {/* Ttools */}
          <p className="ml-4">
            {resumeData.tech.tools.map((tool) => `"${tool}"`).join(", ")}
          </p>
          {/* Databases */}
          <p className="ml-4">
            {resumeData.tech.databases.map((db) => `"${db}"`).join(", ")}
          </p>
          <p className="mb-2">];</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
