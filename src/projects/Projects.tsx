import { RxFigmaLogo, RxGithubLogo } from "react-icons/rx";

/*const technologies = {
  Blockchain: "bg-gray-100",
  Typescript: "bg-blue-100",
  Figma: "bg-red-100",
  Android: "bg-green-100",
  Java: "bg-blue-100",
  Kotlin: "bg-violet-100",
  Firebase: "bg-amber-100",
  Django: "bg-green-100",
  HTML: "bg-orange-100",
  CSS: "bg-blue-100",
};*/

const projects = [
  {
    title: "Rutzo",
    date: "06/2023 - ",
    description:
      "Web3 game that allows users to earn NFTs by competing against other users through the use of NFTs as cards",
    technologies: ["Blockchain", "Typescript", "Figma"],
    image: "https://brandonhxrr.github.io/images/rutzo.png",
    links: {
      figma:
        "https://www.figma.com/file/vTzdbs9N9h4aitGm6orLXr/Rutzo?type=design&node-id=0%3A1&mode=design&t=X7HBdCSIi9EM9cJ2-1",
      github: "https://github.com/brandonhxrr/rutzo/",
      demo: "https://rutzo.studio/",
    },
  },
  {
    title: "ArtLife",
    date: "04/2023 - ",
    description:
      "Android application to recognize famous paintings, learn about art and find nearby galleries.",
    technologies: ["Android", "Figma", "Java"],
    image: "https://brandonhxrr.github.io/images/artlife.png",
    links: {
      figma:
        "https://www.figma.com/file/QVaFkoezpYKOMhoBdhDhT8/MuseAI?type=design&node-id=322%3A255&mode=design&t=unpUYWVJNv8Frutu-1",
      github: "https://github.com/brandonhxrr/artlife/",
    },
  },
  {
    title: "Gallery",
    date: "10/2022 - ",
    description:
      "Minimalistic gallery for Android built with Kotlin to visually present the user's albums and photos in a beautiful way.",
    technologies: ["Android", "Figma", "Kotlin"],
    image: "https://brandonhxrr.github.io/images/gallery.png",
    links: {
      figma:
        "https://www.figma.com/file/U05xmO3BRWDZAeExdHDd24/Gallery?node-id=107%3A129&t=kMPPJUWfGM4yA8jz-1",
      github: "https://github.com/brandonhxrr/gallery/",
    },
  },
  {
    title: "Sites",
    date: "03/2018 - 07/2020",
    description:
      "Android application with Native Development in Java to query the nearby tourist sites by getting the data from the Google Maps API and using Firebase to save the data",
    technologies: ["Android", "Firebase", "Java"],
    image:
      "https://github.com/brandonhxrr/Sites/raw/master/images/sites-v2-0-1.png",
    links: {
      github: "https://github.com/brandonhxrr/Sites",
    },
  },
  {
    title: "Pills",
    date: "03/2022 - ",
    description:
      "Android application with native development in Kotlin to manage the storage of medicines in the home and show warnings about their expiration.",
    technologies: ["Android", "Kotlin", "Firebase", "Figma"],
    image: "https://brandonhxrr.github.io/images/pills.png",
    links: {
      figma:
        "https://www.figma.com/file/Aa1U8iBckPeBBeNgY3jkgg/Pills?node-id=502%3A212",
    },
  },
  {
    title: "Analyzer",
    date: "10/2021 - 01/2022",
    description:
      "Syntactic analyzer made in Java that takes as input a program written in Java and analyzes it lexically using deterministic finite automata (DFA).",
    technologies: ["Java"],
    image: "https://brandonhxrr.github.io/images/analyzer.png",
    links: {
      github: "https://github.com/brandonhxrr/Analyzer/",
    },
  },
  {
    title: "Alphabet",
    date: "12/2021 - 01/2022",
    description:
      "Program made in java that analyzes words of an alphabet with regular expressions, takes as input the symbols of the alphabet, generates random languages and validates Java identifiers.",
    technologies: ["Java"],
    image: "https://brandonhxrr.github.io/images/alphabet.png",
    links: {
      github: "https://github.com/brandonhxrr/Alphabet/",
    },
  },
  {
    title: "ESCOMKT",
    date: "05/2022 - 06/2022",
    description:
      "Django project that works as a platform to announce products for sale within ESCOM so that students can see the product information and contact information of the sellers.",
    technologies: ["Django"],
    image: "https://brandonhxrr.github.io/images/escomkt.png",
    links: {
      github: "https://github.com/brandonhxrr/ESCOMKT/",
    },
  },
  {
    title: "Portfolio",
    date: "06/2022 - 08/2022",
    description:
      "Project for the workshop on the creation of a portfolio. Made with CSS and HTML using responsive design.",
    technologies: ["HTML", "CSS"],
    image:
      "https://d1ngjctyujvjjy.cloudfront.net/projects/covers/af1b2a56-caee-46c2-ab34-00f84d441f55/Thumbnail-portafolio_jaume.jpg",
    links: {
      github: "https://github.com/brandonhxrr/taller-portafolio/",
      demo: "https://brandonhxrr.github.io/taller-portafolio/",
    },
  },
  {
    title: "Nemium",
    date: "08/2022 - 09/2022",
    description:
      "Project for the essential html and css course where the structure for a blog is created and the logical and physical styles are practiced.",
    technologies: ["HTML", "CSS"],
    image:
      "https://leonidasesteban.com/_next/image?url=https%3A%2F%2Fd1ngjctyujvjjy.cloudfront.net%2Fprojects%2Fcovers%2F9ad9d2ca-e622-4ed4-a87a-b29edc189462%2FThumbnail-medium.jpg&w=1920&q=75",
    links: {
      github: "https://github.com/brandonhxrr/html-css-esencial/",
      demo: "https://brandonhxrr.github.io/html-css-esencial/",
    },
  },
  {
    title: "Portfolio",
    date: "07/2022 - 08/2022",
    description:
      "Project for the interactive design course with figma where I learned about frames, vectors, auto layout, libraries and prototypes.",
    technologies: ["Figma"],
    image:
      "https://leonidasesteban.com/_next/image?url=https%3A%2F%2Fd1ngjctyujvjjy.cloudfront.net%2Fprojects%2Fcovers%2Fab37b030-6c77-46f6-8d53-4612163b7d17%2FThumbnail-portafolio_pablo.jpg&w=1920&q=75",
    links: {
      figma:
        "https://www.figma.com/file/uS9Ct6xklbtsZxcwigoWZ2/Portfolio?node-id=0%3A1",
    },
  },
];

function Projects() {
  return (
    <div className="h-auto w-screen bg-gray-950 text-center">
      <h1 className="text-6xl font-bold mt-20 p-3 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 inline-block text-white rounded-md">
        Projects
      </h1>
      <div className="flex p-10 md:p-20 justify-center flex-wrap">
        {projects.map((project, index) => (
          <a href={project.links.demo} target="_blank" key={index}>
            <div
              className={
                "w-80 h-auto bg-slate-50 bg-opacity-5 m-10 rounded-xl pb-3 shadow-lg" +
                (project.links.demo ? " hover:bg-gray-700" : "")
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-tl-xl rounded-tr-xl"
              />

              <div className="flex p-5">
                <p className="text-xl font-bold text-slate-50 w-full text-start">
                  {project.title}
                </p>
                <p className="text-white text-sm self-center w-full">
                  {project.date}
                </p>
              </div>

              <div className="text-left px-5">
                {project.technologies.map((technology, index) => (
                  <span
                    className={
                      "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      // + (technologies as {[key: string]: string})[technology]
                    }
                    key={index}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <p className="px-0 sm:px-5 text-white text-left mt-3 mb-3 text-sm">
                {project.description}
              </p>

              <div className="m-5">
                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    className="text-black rounded-xl bg-indigo-300 p-2 px-3 mx-2 inline-flex font-semibold"
                  >
                    <RxFigmaLogo className="text-black self-center text-xl mx-2" />
                    Figma
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="text-white rounded-xl bg-black p-2 px-3 mx-2 inline-flex font-semibold"
                  >
                    <RxGithubLogo className="text-white self-center text-xl mx-2" />
                    Github
                  </a>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export { Projects };
