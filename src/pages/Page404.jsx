import { Link } from "react-router-dom";

import BtnPrimary from "../components/Buttons/BtnPrimary";

function Page404() {
  return (
    <section className="">
      <div className="py-10 px-4 mx-auto lg:py-20 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-8 text-7xl tracking-tight font-bold lg:text-9xl text-indigo-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
            Whoops!
          </p>
          <p className="mb-12 text-lg font-light text-zinc-600">
            {
              "Sorry, we can't find that page. You'll find lots to explore on the home page. "
            }
          </p>
          <Link to="/">
            <BtnPrimary content="Back to Homepage" size={"xl"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page404;
