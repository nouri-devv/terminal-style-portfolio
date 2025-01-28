import NavBar from "./components/navBar.tsx";
import PageHero from "./components/pageHero.tsx";
import Experience from "./components/experiencePage.tsx";
import Projects from "./components/projects.tsx";
import Education from "./components/education.tsx";

// In App.tsx
function App() {
  return (
    <div className="bg-[#010760] min-h-screen flex flex-col text-green-400 font-mono scroll-smooth">
      {/* NavBar Component */}
      <div className="fixed top-0 left-0 w-full z-20">
        <NavBar />
      </div>
      {/* Main Content */}
      <main className="items-center pt-16 flex flex-col space-y-8 px-4">
        {/* PageHero Section */}
        <div id="home" className="min-h-screen flex items-center scroll-mt-20">
          <PageHero />
        </div>

        {/* Experience Section */}
        <div id="experience" className="mx-auto w-full pb-16 scroll-mt-20">
          <Experience />
        </div>

        <div id="projects" className="mx-auto w-full pb-16 scroll-mt-20">
          <Projects />
        </div>

        {/* Education Section */}
        <div id="education" className="mx-auto w-full pb-16 scroll-mt-20">
          <Education />
        </div>
      </main>
    </div>
  );
}

export default App;
