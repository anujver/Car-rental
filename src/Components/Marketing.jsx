import image9 from "../assets/bg.jpg";
import image66 from "../assets/contactbg.png";

const Marketing = () => {
  return (
    <>
      <div
        className="AdvertismentBox bg-slate-900 mt-20 ml-40 rounded-lg shadow-2xl"
        style={{
          width: "1185px",
          height: "750px",
          backgroundImage: `url(${image66})`,
        }}
      ></div>
      <div
        className="text text-center  bg-transparent -mt-72"
        style={{ fontWeight: "400" }}
      >
        <h1 className="bg-transparent text-white mt-20 text-4xl">
          Unlock the full potential of the <br /> Current vandi App
        </h1>
        <p className="text-white bg-transparent mt-5">
          Experience the ultimate convenience with our app's download, unlocking
          a host of exclusive benifits designed <br /> to elevate your electric
          car rental experience. seamlessy book your eco-friendly ride, access
          real-time vehicle <br /> availablity, and enjoy streamlined chexk-ins,
          all at your fingertips.
        </p>
      </div>
      {/*Container 1 */}
      <div className="shortdes  mt-16 ml-40" style={{ width: "1260px" }}>
        <div className="des1 h-24 flex " style={{ width: "1260px" }}>
          <div
            className="box flex w-72 rounded-lg  bg-slate-900 shadow-2xl"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img h-10 w-10 rounded-lg ml-1"
              style={{ border: "1px solid black", marginTop: "6px" }}
            >
              <img className="h-10 w-10 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>

          <div
            className="box2 flex w-72 rounded-lg ml-3 shadow-2xl
              bg-slate-900"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img2 h-10 w-10 rounded-lg ml-1 shadow-2xl"
              style={{ border: "1px solid black", marginTop: "6px" }}
            >
              {" "}
              <img className="h-10 w-10 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>

          <div
            className="box3 flex w-72 rounded-lg ml-3 shadow-2xl bg-slate-900"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img3 h-10 w-10 rounded-lg ml-1 "
              style={{ border: "1px solid black", marginTop: "6px" }}
            >
              {" "}
              <img className="h-10 w-10 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>

          <div
            className="box4 flex w-72 rounded-lg ml-3  bg-slate-900"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img4 h-11 w-11 rounded-lg ml-1"
              style={{ border: "1px solid black", marginTop: "5px" }}
            >
              {" "}
              <img className="h-10 w-10 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>
        </div>

        {/* Container 2 */}

        <div className="des1 h-24 -mt-5 flex " style={{ width: "1260px" }}>
          <div
            className="box flex w-72 rounded-lg shadow-2xl bg-slate-900"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img h-10 w-10 shadow-2xl rounded-lg ml-1"
              style={{ border: "1px solid black", marginTop: "6px" }}
            >
              {" "}
              <img className="h-10 w-10 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>

          <div
            className="box2 flex w-72 rounded-lg ml-3 shadow-2xl  bg-slate-900"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img2 h-10 w-10 rounded-lg ml-1"
              style={{ border: "1px solid black", marginTop: "6px" }}
            >
              {" "}
              <img className="h-10 w-10 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>

          <div
            className="box3 flex w-72 rounded-lg ml-3 shadow-lg bg-slate-900"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img3 h-10 w-10 rounded-lg ml-1 "
              style={{ border: "1px solid black", marginTop: "6px" }}
            >
              {" "}
              <img className="h-10 w-10 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>

          <div
            className="box4 flex w-72 rounded-lg ml-3 shadow-lg bg-slate-900"
            style={{ border: "1px solid black", height: "55px" }}
          >
            <div
              className="img4 h-11 w-11 rounded-lg ml-1"
              style={{ border: "1px solid black", marginTop: "5px" }}
            >
              {" "}
              <img className="h-11 w-11 rounded-lg" src={image9} alt="" />
            </div>
            <p className="text-white mt-3 ml-3  bg-slate-900">Easy booking</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
