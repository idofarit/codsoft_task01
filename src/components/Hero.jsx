import heroImg from "../assets/header-bg.jpg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={heroImg}
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Creating Innovations
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Tech that makes your life
            <br className="hidden md:block" />
            smooth{" "}
            <span className="inline-block text-deep-purple-accent-400 text-red-500">
              Try Now
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div className="border-[1rem] py-24 border-lime-600">
    //   <div className="align-element grid md:grid-cols-2 items-center gap-8">
    //     <article>
    //       <h1 className="text-7xl font-bold tracking-wider">I'm John</h1>
    //       <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
    //         Front-End Developer
    //       </p>
    //       <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
    //         turning ideas into interactive reality
    //       </p>
    //       <div className="flex gap-x-4 mt-4">
    //         <a href="#">
    //           <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
    //         </a>
    //         <a href="#">
    //           <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
    //         </a>
    //         <a href="#">
    //           <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
    //         </a>
    //       </div>
    //     </article>
    //     <article className="hidden md:block">
    //       <img src={heroImg} className="h-80 lg:h-96" />
    //     </article>
    //   </div>
    // </div>
  );
};
export default Hero;
