import resumeData from "../reasume.json"; // Adjust the import path

const Projects = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-green-400 text-3xl mb-4 flex items-center">
        <span className="text-green-600">$</span>
        <span className="ml-2">projects</span>
        <span className="ml-1 h-6 w-[0.35rem] bg-green-500 animate-[blink_1s_step-end_infinite]" />
      </h1>

      {resumeData.projects.map((project, index) => (
        <div key={index} className="mb-6">
          <div className="border-l-1 border-green-400 pl-4 ml-2">
            <p className="text-2xl mb-2">{project.title}</p>
            <p className="text-gray-400">{project.description}</p>

            {/* Tech Stack Section */}
            {project.technologies && (
              <div className="mt-4 text-gray-400">
                <p className="mb-2"> Tech = [</p>
                {/* Render technologies in chunks of 3 for better readability */}
                {project.technologies
                  .map((tech) => `"${tech}"`)
                  .reduce((result: string[][], tech, index) => {
                    const chunkIndex = Math.floor(index / 3);
                    if (!result[chunkIndex]) {
                      result[chunkIndex] = []; // Start a new chunk
                    }
                    result[chunkIndex].push(tech);
                    return result;
                  }, [] as string[][])
                  .map((chunk, idx) => (
                    <p className="ml-4" key={`tech-chunk-${idx}`}>
                      {chunk.join(", ")}
                    </p>
                  ))}
                <p className="mb-2">];</p>
              </div>
            )}

            {/* GitHub Link */}
            {project.url && (
              <div className="mt-2 text-sm text-gray-500">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
