import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const developerName = "NathanT";
  const developerGithub = "https://github.com/NathanT31";
  const rickmortyApi = "https://rickandmortyapi.com";
  const githubLink = "https://github.com/NathanT31/Rick-and-Morty_Project";
  const year = "2023";

  return (
    <footer className="bg-gray-900 text-white py-20 w-full">
      <div className="flex flex-col gap-5 container mx-auto text-center">
        <p className="text-gray-400">
          Project based on{" "}
          <a
            href={rickmortyApi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            The Rick and Morty API
          </a>
        </p>
        <div className="flex justify-center items-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faGithub} size="md" className="mx-1" />{" "}
            GitHub
          </a>
          {/* <span className="mx-2 text-gray-400">|</span> */}
          {/* Agrega más enlaces aquí si es necesario */}
        </div>
        <p className="text-gray-400">
          Made by{" "}
          <a
            href={developerGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-code"
              size="md"
              className="mx-1"
            />{" "}
            <span className="underline">{developerName}</span>
          </a>{" "}
          <span className="mx-2 text-gray-400 font-extrabold">·</span>
          {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
