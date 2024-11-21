import image6 from "../assets/contactbg.png";

const Mobileapp = () => {
  return (
    <>
      <div
        className="maincontainer ml-40 flex"
        style={{ width: "1185px", height: "650px" }}
      >
        <div
          className="textarea h-72 bg-transparent mt-36 "
          style={{ width: "700px" }}
        >
          <p
            className="text-white mt-10 text-5xl"
            style={{ fontWeight: "400" }}
          >
            Download Our App and Start <br /> Renting Today
          </p>
          <p className="text-white mt-10 " style={{ fontWeight: "420" }}>
            Experience the connvenience and ease of renting an electric vehicle
            with our user- <br /> friendly mobile app. Download our app now and
            gain access to a world of sustainable <br /> mobility at your
            fingertips.
          </p>
          <div
            className="image bg-slate-900 -mt-80 shadow-2xl "
            style={{
              border: "1px solid black",
              width: "700px",
              height: "450px",
              marginLeft: "482px",
              backgroundImage: `url(${image6})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Mobileapp;
