import resumeData from "../reasume.json"; // Adjust the import path

const Experience = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-green-400 text-3xl mb-4 flex items-center">
        <span className="text-green-600">$</span>
        <span className="ml-2">experience</span>
        <span className="ml-1 h-6 w-[0.35rem] bg-green-500 animate-[blink_1s_step-end_infinite]" />
      </h1>

      {resumeData.experience.map((experience, index) => (
        <div key={index} className="mb-6">
          <div className="border-l-1 border-green-400 pl-4 ml-2">
            <p className="text-2xl mb-2">{experience.position}</p>
            <p className="text-gray-400">{experience.company}</p>
            <div className="mt-4 text-gray-400">
              {experience.description.map((point, idx) => (
                <p key={idx}>- {point}</p>
              ))}
            </div>

            {/* Tech Stack Section */}
            {experience.technologies && (
              <div className="mt-4 text-gray-400">
                <p className="mb-2"> Tech = [</p>
                {experience.technologies
                  .map((tech) => `"${tech}"`)
                  .reduce((result: string[][], tech, index) => {
                    const chunkIndex = Math.floor(index / 3);
                    if (!result[chunkIndex]) {
                      result[chunkIndex] = [];
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

            {/* Date Section */}
            <div className="mt-2 text-sm text-gray-500">
              {new Date(experience.startDate).toLocaleDateString("en-AU", {
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {experience.endDate === "Present"
                ? "Present"
                : new Date(experience.endDate).toLocaleDateString("en-AU", {
                    month: "short",
                    year: "numeric",
                  })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
