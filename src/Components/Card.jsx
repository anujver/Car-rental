import image115 from "../assets/contactbg.png";

const Card = () => {
  return (
    <>
      {/* Peragrapg one */}
      <div className="pera1 flex ml-20">
        <div>
          <p className="text-white mt-24 ml-16 flex">
            Rent Electric Vehicles and Embrance Sustainable Transportation
          </p>
        </div>
        <div className="pera2 mt-24 ml-60 flex ">
          <p className=" text-white ">
            Renting electric Vehicles (EVs) provides an excellent opportunity to
            embrance <br />
            Sustainable transportation. By opting for electricc vehicles,
            indiviuals can <br /> contribute to reducing carbon emissions and
            minimizing their enviornmental <br /> impact.
          </p>
        </div>
      </div>
      {/* Peragraph one */}
      {/* Heading one */}
      <div className="head  -mt-12  " style={{ marginLeft: "142px" }}>
        <h1 className="text-white text-5xl block">Explore the Future of</h1>
        <h1 className="text-white text-5xl mt-3  block">
          Mobility with Current Vandi
        </h1>
      </div>
      {/* Button */}
      <div className="button ml-20">
        <button className="w-32 ml-16 mt-9 h-11 rounded text-white bg-red-600">
          Find Your Ride
        </button>
      </div>
      {/* ^^ Button End ^^ */}
      {/* Banner container */}
      <div
        className=" bg-slate-900 w-4/5 ml-36 mt-16 rounded shadow-md bg-center flex "
        style={{ height: "600px" }}
      >
        {/* Banner image container */}
        <div
          className="image rounded-lg"
          style={{
            border: "1px solid rgb(15 23 42)",
            width: "1160px",
            height: "550px",
            marginTop: "25px",
            marginLeft: "25px",
            backgroundImage: `url(${image115})`,
          }}
        >
          {/* Small box */}
          <div
            className="hundred h-20   bg-slate-900  rounded-lg flex"
            style={{
              marginTop: "-55px",
              marginLeft: "695.5px",
              width: "489px",
            }}
          >
            {/* Text 1 */}
            <div className="class1 bg-transparent ml-3">
              <h1 className="text-white bg-transparent text-3xl mt-2 ml-3">
                100+
              </h1>
              <p className="text-white bg-transparent ml-3">Happy customers</p>
            </div>

            {/* Text 2 */}
            <div className="class2 bg-transparent ml-5">
              <h1 className="text-white bg-transparent text-3xl mt-2 ml-3">
                100+
              </h1>
              <p className="text-white bg-transparent ml-3">Happy customers</p>
            </div>

            {/* Text 3 */}
            <div className="class3 bg-transparent ml-5">
              <h1 className="text-white bg-transparent text-3xl mt-2 ml-3">
                100+
              </h1>
              <p className="text-white bg-transparent ml-3">Happy customers</p>
            </div>
            {/* ^^ Text End ^^ */}
          </div>
          {/* ^^ Small box end ^^ */}
        </div>
        {/* ^^ Banner image container ^^ */}
      </div>
      {/* ^^ Banner container End ^^ */}
    </>
  );
};

export default Card;
