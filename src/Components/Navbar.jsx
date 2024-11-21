const Navbar = () => {
  return (
    <>
      {/* Main Container */}
      <div className="container flex w-full">
        {/* Items Container */}
        <div className="navlist flex">
          {/* Logo */}
          <div className="logo w-96">
            <h1 className="text-white text-2xl mt-9 ml-36">Current vandi</h1>
          </div>
          {/* Other Links */}
          <a href="/">
            <p className="text-white ml-96 mt-10">Home</p>
          </a>
          <a href="/process">
            <p className="text-white ml-9 mt-10">Process</p>
          </a>
          <a href="/vehicle">
            {" "}
            <p className="text-white ml-9 mt-10">Vehicles</p>{" "}
          </a>
          <a href="/pricing">
            <p className="text-white ml-9 mt-10">Pricing</p>
          </a>
          <a href="/About">
            <p className="text-white ml-9 mt-10">About</p>
          </a>
          <a href="/App">
            <p className="text-white ml-9 mt-10">App</p>
          </a>
          {/* Button component ( Temprory link tag was used to Route the contact page ) */}
          <a href="/contact">
            <button className="text-white ml-12 mt-7 bg-slate-900 h-11 w-28 rounded">
              Contact
            </button>
          </a>
          {/* Links */}
        </div>
        {/* Items Container End */}
      </div>
      {/* Container End */}
      <hr className="mt-3" />
    </>
  );
};

export default Navbar;
