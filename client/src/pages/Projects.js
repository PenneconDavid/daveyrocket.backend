import React, { useEffect, useState } from "react";
import { getProjects } from "../api/projectAPI";
import ClipLoader from "react-spinners/ClipLoader"; // Importing spinner
import { Helmet } from "react-helmet";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Adding loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(Array.isArray(projectsData) ? projectsData : []);
        setError(null);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects.");
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color={"#FFFFFF"} size={50} />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Projects - David Seibold's Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Browse David Seibold's full-stack development projects, including front-end and back-end builds. Discover how I combine technical skills with my M&A background."
        />
        <meta
          property="og:title"
          content="Projects - David Seibold's Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore a range of full-stack development projects created by David Seibold."
        />
        {/* <meta
          property="og:image"
          content="https://daveyrockets.me/og-projects-image.jpg"
        />{" "} */}
        {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://daveyrockets.me/projects" />
      </Helmet>
      <div className="container bg-[#282828] mx-auto p-4 pb-40 max-w-8xl">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#EFBD19] to-[#8000FF] mb-8 py-10">
          Projects
        </h1>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Displaying the project thumbnail link as a responsive page preview */}
                <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-t-lg">
                  <iframe
                    src={project.thumbnail} // Assuming 'thumbnail' holds the URL for the page preview
                    className="absolute top-0 left-0 w-full h-full"
                    title={project.title}
                    sandbox="allow-scripts allow-same-origin"
                    style={{
                      transform: "scale(0.5)", // Shrinking the width to fit the frame
                      transformOrigin: "top left", // Ensuring scaling is from the top-left corner
                      width: "200%", // Expanding the iframe content width for full view
                      height: "200%", // Keeping height consistent to avoid breaking scale
                    }}
                  ></iframe>
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-semibold bg-gray-800 text-lime-600">
                    {project.title}
                  </h2>
                  <p className="text-[#F3EACC] bg-gray-800 mt-2 text-[18px]">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-blue-400 mt-4 block text-center hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-[#F3EACC] text-center text-[18px]">
            No projects found.
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
