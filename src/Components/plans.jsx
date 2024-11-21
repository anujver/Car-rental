import image from "../assets/bg.jpg";

const Plans = () => {
  return (
    <>
      {/* Head container */}
      <div className="head text-center ml-2">
        <h1 className="text-white text-4xl mt-20">Our Pricing Plans</h1>
        <p className="text-white mt-5">
          Discover affordable electric car rental options that align with your
          budget. We believe in making eco-conscious travel <br />
          accessible to all, without compromising on quality comfort.
        </p>
      </div>
      {/* Head container End */}
      {/* CARD 1 */}
      <div className="cards flex">
        <div
          className="card1 h-96 w-3/4 ml-44 mt-16 rounded-lg shadow-xl"
          style={{ border: "1px solid rgb(15 23 42)" }}
        >
          <div
            className="image1 h-80 mt-8 shadow-xl rounded-lg "
            style={{
              marginLeft: "550px",
              width: "540px",
            }}
          >
            <img
              className="w-full rounded-lg"
              style={{ height: "318px" }}
              src={image}
              alt=""
            />
          </div>
          <div
            className="price1 ml-16 rounded-lg bg-slate-900 shadow-lg"
            style={{
              width: "460px",
              height: "55px",
              border: "1px solid  rgb(15 23 42)",
              fontWeight: "bold",
              marginTop: "-280px",
            }}
          >
            <h1
              className="text-white mt-3 ml-12 bg-slate-900"
              style={{ fontSize: "18px" }}
            >
              Compact electric vehicles
            </h1>
            <h1 className="text-white text-2xl -mt-7 ml-80 bg-slate-900">
              10$
            </h1>
            <h1
              className="text-white -mt-6 text-sm bg-slate-900"
              style={{ marginLeft: "365px", fontWeight: "lighter" }}
            >
              /per hour
            </h1>
            <p className="text-white mt-12" style={{ fontWeight: "lighter" }}>
              Perfect for short trips and urban commuting.
            </p>
            <p className="text-white mt-1" style={{ fontWeight: "lighter" }}>
              Ideal for indiviuals or couples.
            </p>
            <p className="text-white mt-1" style={{ fontWeight: "lighter" }}>
              Environmentally friendly and cost-effective.
            </p>
            <div className="btns mt-8">
              <button className="text-white bg-red-600 w-52 h-10 rounded">
                Get a Ride
              </button>
              <button className=" text-white bg-slate-900 w-52 h-10 ml-5 rounded">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD 1 End */}

      {/* CARD 2 */}
      <div className="cards ml-4 flex">
        <div
          className="card2 h-96 w-2/3 ml-40 mt-12 shadow-white rounded-lg "
          style={{ border: "1px solid  rgb(15 23 42)", width: "1132px" }}
        >
          <div
            className="image2 h-80 mt-8 shadow-xl "
            style={{
              marginLeft: "30px",
              width: "540px",
            }}
          >
            <img
              className="w-full rounded-lg"
              style={{ height: "318px" }}
              src={image}
              alt=""
            />
          </div>
          <div
            className="price1  rounded-lg shadow-xl bg-slate-900"
            style={{
              width: "460px",
              height: "55px",
              border: "1px solid black",
              fontWeight: "bold",
              marginTop: "-280px",
              marginLeft: "610px",
            }}
          >
            <h1
              className="text-white mt-3 ml-12 bg-slate-900 rounded-lg"
              style={{ fontSize: "18px" }}
            >
              Mid-size Electric vehicle
            </h1>
            <h1 className="text-white text-2xl -mt-7 ml-80 bg-slate-900">
              15$
            </h1>
            <h1
              className="text-white -mt-6 text-sm bg-slate-900"
              style={{ marginLeft: "365px", fontWeight: "lighter" }}
            >
              /per hour
            </h1>
            <p className="text-white mt-12" style={{ fontWeight: "lighter" }}>
              Spacious and comfortable for small families or groups.
            </p>
            <p className="text-white mt-1" style={{ fontWeight: "lighter" }}>
              Suitable for both city driving and long journeys.
            </p>
            <p className="text-white mt-1" style={{ fontWeight: "lighter" }}>
              Enjoy the benifits of electric mobility with added convenience.
            </p>
            <div className="btns mt-8">
              <button className="text-white bg-red-600 w-52 h-10 rounded">
                Get a Ride
              </button>
              <button className=" text-white bg-slate-900 w-52 h-10 ml-5 rounded">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD 2 End */}

      {/* CARD 3 */}
      <div className="cards flex">
        <div
          className="card3 h-96 mt-12 rounded-lg shadow-xl"
          style={{
            border: "1px solid  rgb(15 23 42)",
            width: "1125px",
            marginLeft: "180px",
          }}
        >
          <div
            className="image1 h-80 mt-8 shadow-xl "
            style={{
              marginLeft: "560px",
              width: "525px",
            }}
          >
            <img
              className="w-full rounded-lg"
              style={{ height: "318px" }}
              src={image}
              alt=""
            />
          </div>
          <div
            className="price1 ml-16 rounded-lg shadow-xl bg-slate-900"
            style={{
              width: "460px",
              height: "55px",
              border: "1px solid  rgb(15 23 42)",
              fontWeight: "bold",
              marginTop: "-280px",
            }}
          >
            <h1
              className="text-white mt-3 ml-12 bg-slate-900"
              style={{ fontSize: "18px" }}
            >
              Luxury Electric vehicle
            </h1>
            <h1 className="text-white text-2xl -mt-7 ml-80 bg-slate-900">
              20$
            </h1>
            <h1
              className="text-white -mt-6 text-sm bg-slate-900"
              style={{ marginLeft: "365px", fontWeight: "lighter" }}
            >
              /per hour
            </h1>
            <p className="text-white mt-12" style={{ fontWeight: "lighter" }}>
              Experince the pinnacle of comfort and style.
            </p>
            <p className="text-white mt-1" style={{ fontWeight: "lighter" }}>
              Ideal for special occasions, business trips, or luxury travel.
            </p>
            <p className="text-white mt-1" style={{ fontWeight: "lighter" }}>
              Enjoy advanced features and cutting-edge technology.
            </p>
            <div className="btns mt-8">
              <button className="text-white bg-red-600 w-52 h-10 rounded">
                Get a Ride
              </button>
              <button className=" text-white bg-slate-900 w-52 h-10 ml-5 rounded">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD 3 End */}

      {/* Additional information Box End */}
      <div className="card4 flex">
        <div
          className="card3  mt-12 rounded-lg shadow-xl"
          style={{
            height: "210px",
            border: "1px solid  rgb(15 23 42)",
            width: "1120px",
            marginLeft: "185px",
          }}
        >
          <h1 className="text-white text-2xl mt-12 ml-10">
            Additional information
          </h1>
          <p className="text-white ml-10 mt-6 text-sm">
            Say goodbye to gas stations, as our cars offer{" "}
          </p>
          <p className="text-white ml-10 ">Sustainable savings on fuel costs</p>
          <div
            className="des1 h-11 w-72 rounded-lg -mt-24 flex shadow-xl"
            style={{ border: "1px solid rgb(15 23 42)", marginLeft: "450px" }}
          >
            <div
              className="imgone h-9 w-9  rounded-lg shadow-xl"
              style={{
                border: "1px solid  rgb(15 23 42)",
                marginTop: "3px",
                marginLeft: "3px",
              }}
            >
              <img className="h-9 w-full rounded-lg" src={image} alt="" />
            </div>
            <p
              className="text-white text-sm ml-4 bg-transparent"
              style={{ marginTop: "10px" }}
            >
              Minimun rental period : 1 hour
            </p>
          </div>
          <div
            className="des2 h-11 w-72 rounded-lg flex -mt-11 shadow-xl"
            style={{ border: "1px solid rgb(15 23 42)", marginLeft: "750px" }}
          >
            <div
              className="imgone h-9 w-9  rounded-lg shadow-xl "
              style={{
                border: "1px solid rgb(15 23 42)",
                marginTop: "3px",
                marginLeft: "3px",
              }}
            >
              <img className="h-9 w-full rounded-lg" src={image} alt="" />
            </div>
            <p className="text-white text-sm ml-4 bg-transparent ">
              The pricing includes coverage and <br />
              charging costs.
            </p>
          </div>
          <div
            className="des3 h-11 w-72 rounded-lg flex shadow-xl"
            style={{
              border: "1px solid rgb(15 23 42)",
              marginLeft: "450px",
              marginTop: "15px",
            }}
          >
            <div
              className="imgone h-9  rounded-lg shadow-xl"
              style={{
                border: "1px solid rgb(15 23 42)",
                marginTop: "3px",
                marginLeft: "3px",
                width: "55px",
              }}
            >
              <img className="h-9 w-full rounded-lg" src={image} alt="" />
            </div>
            <p className="text-white text-sm ml-1 bg-transparent">
              All vehicles come with GPS navigation and roadside assistance.
            </p>
          </div>
          <div
            className="des4 h-11 w-72 rounded-lg -mt-11 flex shadow-xl"
            style={{ border: "1px solid rgb(15 23 42)", marginLeft: "750px" }}
          >
            <div
              className="imgone h-9  rounded-lg shadow-xl"
              style={{
                border: "1px solid rgb(15 23 42)",
                marginTop: "3px",
                marginLeft: "3px",
                width: "35px",
              }}
            >
              <img className="h-9 w-full rounded-lg" src={image} alt="" />
            </div>
            <p className="text-white text-sm  ml-4 bg-transparent">
              Booking can done through our user- <br />
              friendly mobile app
            </p>
          </div>
        </div>
      </div>
      {/* Additional information Box End */}
    </>
  );
};

export default Plans;
