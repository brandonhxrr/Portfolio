import { Socials } from "./Socials";
const Description = () => {
  return (
    <div className="bg-gray-950">
      <div className="mx-auto flex" id="about">
        <div className="flex flex-col items-center justify-center w-screen rounded-3xl bg-gray-50 bg-opacity-5 m-10 p-10">
          <img
            src="https://avatars.githubusercontent.com/u/39093860?v=4"
            alt="Brandon Herrera"
            className="rounded-full w-48 h-48"
          />

          <h3 className="text-2xl font-bold text-slate-50 sm:text-4xl p-10">
            About me
          </h3>
          <p className="px-0 sm:px-20 text-white text-center">
            I'm a software engineer with a passion for learning and creating.
            Mexican student of Computer Systems Engineering at ESCOM IPN since
            2020. Core team member of the Google Developer Student Club ESCOM
            IPN and IBM zSystems Student Ambassador. Passionate about mobile
            development and UI/UX design.
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Description;
