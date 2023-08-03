import { Link } from "react-router-dom";

import imageRickMorty from "../assets/img/rick-morty.png";
import BtnPrimary from "../components/Buttons/BtnPrimary";

function Home() {
  return (
    <div className="animate__animated animate__zoomIn">
      <div className="flex flex-col place-content-center justify-center items-center gap-10">
        <h1 className="text-5xl sm:text-6xl font-bold text-center mt-10">
          The Rick and Morty Characters
        </h1>
        <img
          src={imageRickMorty}
          alt="Rick & Morty"
          className="max-h-[420px] w-2/10"
        />
        <Link to="/characters/">
          <BtnPrimary content="Find characters" size={"xl"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
