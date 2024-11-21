import image2 from "../assets/petrol2.avif";

const Benifits = () => {
  return (
    <>
      {/* Text and heading */}
      <div className="ben text-center -ml-1" style={{ marginTop: "100px" }}>
        <h1 className="text-white text-4xl">Our Benefits</h1>
        <p className="text-white mt-4">
          Embrace the numerous advantages of choosing our electric car rental
          service.From reducing your carbon footprint to <br /> enjoying smooth,
          silent rides, our fleet of electric vehicles ensures guilt-free
          exploration.
        </p>
      </div>
      {/* Text and image container */}
      <div className="petrol flex ">
        {/* Left Side Text */}
        {/* First peragraph */}
        <div className="one">
          <h1 className="text-white ml-64 mt-36 text-2xl">
            Enviromental Friendly
          </h1>
        </div>
        <div className="peraone mt-48 -ml-80">
          <p className="text-white ">
            Reduce your carbon footprint and contribute
          </p>
          <p
            className="text-white ml-32
          "
          >
            To cleaner, greener planet.
          </p>
        </div>
        <div className="btn1 bg-slate-900 h-11 w-11 rounded-full mt-36 ml-6 text-white text-center py-2 border-2 border-slate-600 text-1xl ">
          01
        </div>

        {/*Second Peragraph*/}
        <div className="Two">
          <h1 className="text-white mt-72 -ml-52 text-2xl">Cost savings</h1>
        </div>
        <div className="peraone mt-80 -ml-96">
          <p className="text-white py-4 mx-8">
            Enjoy lower fuel costs and maintenance
          </p>
          <p
            className="text-white ml-4 -mt-5
          "
          >
            expenses compared to traditional vehicles.
          </p>
        </div>
        <div className="btn2 bg-slate-900 h-11 w-11 rounded-full mt-72 ml- text-white text-balance text-center py-2 border-2 border-slate-600 text-1xl ">
          02
        </div>

        {/*Third peragraph*/}
        <div className="Three">
          <h1
            className="text-white text-2xl"
            style={{ marginTop: "435px", marginLeft: "-250px" }}
          >
            Noise Reduction
          </h1>
        </div>
        <div
          className="peraone mt-48 -ml-80"
          style={{ marginTop: "440px", marginLeft: "-10px" }}
        >
          <p
            className="text-white "
            style={{ marginTop: "50px", marginLeft: "-330px" }}
          >
            Experince quieter journeys for a more
          </p>
          <p
            className="text-white ml-32
          "
            style={{ marginTop: "-2px", marginLeft: "-255px" }}
          >
            Peacefull and pleasant ride.
          </p>
        </div>
        <div
          className="btn3 bg-slate-900 h-11 w-11 rounded-full text-white text-center py-2 border-2 border-slate-600 text-1xl "
          style={{ marginTop: "430px", marginLeft: "-35px" }}
        >
          03
        </div>
        {/* Middle Image Container */}
        <div
          className="petrol h-96 bg-slate-900 w-80 ml-12 mt-24 shadow-lg"
          style={{ height: "480px" }}
        >
          <img
            className="w-full rounded-lg shadow-xl"
            style={{ height: "480px" }}
            src={image2}
            alt=""
          />
        </div>
        {/* Middle Image Container End */}
        {/* Right Side Text */}
        {/* Fourth peragraph */}
        <div className="Four h-56">
          <h1
            className="text-white text-2xl"
            style={{ marginTop: "147px", marginLeft: "100px" }}
          >
            Convenient charging
          </h1>
        </div>
        <div
          className="peraone mt-48 -ml-80"
          style={{ marginTop: "440px", marginLeft: "-10px" }}
        >
          <p
            className="text-white "
            style={{ marginTop: "-249px", marginLeft: "-209px" }}
          >
            Access to charging solutions across the city
          </p>
          <p
            className="text-white ml-32
          "
            style={{ marginTop: "-2px", marginLeft: "-209px" }}
          >
            to hassle-free recharging
          </p>
        </div>

        <div
          className="btn3 bg-slate-900 h-11 w-11 rounded-full text-white text-center py-2 border-2 border-slate-600 text-1xl "
          style={{ marginTop: "142px", marginLeft: "-370px" }}
        >
          04
        </div>
        {/* Fifth peragraph */}

        <div className="Fifth bg-transparent">
          <h1
            className="text-white text-2xl"
            style={{ marginTop: "285px", marginLeft: "20px" }}
          >
            Flexiblity
          </h1>
        </div>
        <div
          className="peraone mt-48 -ml-80"
          style={{ marginTop: "440px", marginLeft: "-10px" }}
        >
          <p
            className="text-white "
            style={{ marginTop: "-105px", marginLeft: "-80px" }}
          >
            Choose from variety of electric vehicle
          </p>
          <p
            className="text-white
          "
            style={{ marginTop: "-2px", marginLeft: "-80px" }}
          >
            Models to suit your specific needs.
          </p>
        </div>
        <div
          className="btn3 bg-slate-900 h-11 w-11 rounded-full text-white text-center py-2 border-2 border-slate-600 text-1xl "
          style={{ marginTop: "278px", marginLeft: "-336px" }}
        >
          05
        </div>

        {/* sixth peragraph */}

        <div className="sixth bg-transparent">
          <h1
            className="text-white text-2xl"
            style={{ marginTop: "442px", marginLeft: "20px" }}
          >
            Zero Emissions
          </h1>
        </div>
        <div
          className="peraone mt-46 -ml-80"
          style={{ marginTop: "440px", marginLeft: "-10px" }}
        >
          <p
            className="text-white "
            style={{ marginTop: "55px", marginLeft: "-145px" }}
          >
            Play your part in reducing air pollution and
          </p>
          <p
            className="text-white
          "
            style={{ marginTop: "-2px", marginLeft: "-145px" }}
          >
            improving air quality.
          </p>
        </div>
        <div
          className="btn3 bg-slate-900 h-11 w-11 rounded-full text-white text-center py-2 border-2 border-slate-600 text-1xl "
          style={{ marginTop: "435px", marginLeft: "-368px" }}
        >
          06
        </div>
      </div>
      {/* ^^ Text and image container End ^^ */}
    </>
  );
};

export default Benifits;
