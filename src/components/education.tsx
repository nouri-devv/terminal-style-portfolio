import resumeData from "../reasume.json";

const Education = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-green-400 text-3xl mb-4 flex items-center">
        <span className="text-green-600">$</span>
        <span className="ml-2">education</span>
        <span className="ml-1 h-6 w-[0.35rem] bg-green-500 animate-[blink_1s_step-end_infinite]" />
      </h1>

      {resumeData.education.map((education, index) => (
        <div key={index} className="mb-6">
          <div className="border-l-1 border-green-400 pl-4 ml-2">
            <p className="text-2xl mb-2">{education.degree}</p>
            <p className="text-gray-400">{education.institution}</p>
            <p className="text-gray-400 italic">{education.fieldOfStudy}</p>

            {/* Courses Section */}
            {education.courses && (
              <div className="mt-4 text-gray-400">
                <p className="mb-2"> Courses = [</p>
                {education.courses
                  .map((course) => `"${course}"`)
                  .reduce((result: string[][], course, index) => {
                    const chunkIndex = Math.floor(index / 3);
                    if (!result[chunkIndex]) {
                      result[chunkIndex] = [];
                    }
                    result[chunkIndex].push(course);
                    return result;
                  }, [] as string[][])
                  .map((chunk, idx) => (
                    <p className="ml-4" key={`course-chunk-${idx}`}>
                      {chunk.join(", ")}
                    </p>
                  ))}
                <p className="mb-2">];</p>
              </div>
            )}

            {/* Date Section */}
            <div className="mt-2 text-sm text-gray-500">
              {new Date(education.startDate).toLocaleDateString("en-AU", {
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {new Date(education.endDate).toLocaleDateString("en-AU", {
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

export default Education;
