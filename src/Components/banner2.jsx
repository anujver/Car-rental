import image105 from "../assets/contactbg.png";

const Bannertwo = () => {
  return (
    <>
      <div
        className="banner bg-slate-900 w-full flex bg-right"
        style={{ height: "550px", backgroundImage: `url(${image105})` }}
      >
        <div className="text h-96 w-2/5 bg-transparent text-end">
          <h1 className="text-white bg-transparent text-5xl mt-44">
            How it's works
          </h1>
          <p className="text-white bg-transparent mt-9">
            At current vandi, we make renting and using electric vehicles a
            seamless and <br /> hassle-free experience.here's a step-by-step
            breakdown of our platform <br /> works.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bannertwo;
