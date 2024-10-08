import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>David Seibold - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio site of David Seibold, showcasing full-stack projects, blogs, and professional skills. Connect with me to learn more about my journey from M&A to software engineering."
        />
        <meta
          name="keywords"
          content="David Seibold, full-stack developer, software engineer, coding portfolio, M&A, projects"
        />
        <meta name="author" content="David Seibold" />
        {/* Open Graph Tags for Social Sharing */}
        <meta
          property="og:title"
          content="David Seibold - Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my journey from M&A to software engineering. View my projects and connect!"
        />
        <meta
        // property="og:image"
        // content="https://daveyrockets.me/og-image.jpg"
        />{" "}
        {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://daveyrockets.me" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-[#282828] pb-80 min-h-screen flex flex-col justify-between">
        <div className="mx-auto max-w-4xl px-4 pt-20">
          <h2 className="text-4xl md:text-6xl my-6 md:my-12 font-Poppins text-center bg-[#282828] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#EFBD19] to-[#8000FF]">
            I'm David, my friends call me Davey Rockets, and I'm a Full Stack
            Engineer!
          </h2>
          <p className="mb-6 md:mb-12 bg-[#282828] py-8 md:py-16 text-base md:text-lg">
            From M&A spreadsheets to full-stack sprints, I’ve traded in my
            calculator for code! As an entry-level full-stack software engineer,
            I bring a unique blend of strategic thinking and technical execution
            to every project. While I’m just getting started in the coding
            world, my passion for building scalable, efficient applications is
            growing every day. With hands-on experience in JavaScript, React.js,
            Node.js, and MongoDB, I’m diving deep into the world of software
            development, learning new skills and applying them to real-world
            challenges. Whether it's crafting smooth user interfaces or
            designing efficient back-end systems, I love creating solutions that
            make an impact.
          </p>
          <div className="flex justify-center space-x-12 mt-12">
            <Link
              to="/contact"
              className="bg-lime-600 font-bold py-4 px-8 rounded-lg flex justify-center items-center"
            >
              Get in Touch
            </Link>
            <button className="border-4 border-lime-600 text-lime-600 font-bold py-4 px-8 rounded-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
