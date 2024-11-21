import image7 from "../assets/bg.jpg";

const Keypoints = () => {
  return (
    <>
      {/*Next div*/}
      <div className="ben mt-20 text-center ml-3">
        <h1 className="text-white text-4xl">Key points</h1>
        <p className="text-white mt-4">
          Enjoy emission-free-driving, significant fuel savings, and exceptional
          customer support as your embark on guilt-free <br /> journeys, making
          a positive impact on the environment with every mile. exploration.
        </p>
      </div>
      {/*Next div*/}
      <div
        className="maindiv mt-16 ml-60"
        style={{ height: "500px ", width: "1030px" }}
      >
        {/*Next div*/}
        <div className="card1con flex h-56 ">
          <div
            className="card1 h-52 rounded-lg shadow-2xl"
            style={{ border: "1px solid rgb(15 23 42)", width: "520px" }}
          >
            {/*Next div*/}
            <div
              className="time h-11 w-11 rounded-lg mt-10 ml-12 shadow-xl"
              style={{ border: "1px solid rgb(15 23 42)" }}
            >
              <img
                className="h-11 w-11 rounded-lg shadow-xl"
                src={image7}
                alt=""
              />
            </div>
            {/*Div end*/}
            <h1 className="text-white -mt-9 ml-28" style={{ fontSize: "18px" }}>
              Hourly-Based Pricing
            </h1>
            <p
              className="text-white text-sm mt-8 ml-12"
              style={{ fontWeight: "lighter" }}
            >
              We understand that not all rental needs are the same, That's why
              we offer <br /> an hourly-based pricing model that allows you to
              pay only for the hours <br />
              you use.
            </p>
          </div>

          {/*Next div*/}

          <div
            className="card2 h-52 rounded-lg ml-4 shadow-2xl"
            style={{ border: "1px solid rgb(15 23 42)", width: "520px" }}
          >
            {/*Next div*/}
            <div
              className="time h-11 w-11 rounded-lg mt-10 ml-12 shadow-2xl"
              style={{ border: "1px solid rgb(15 23 42)" }}
            >
              <img
                className="h-11 w-11 rounded-lg shadow-xl"
                src={image7}
                alt=""
              />
            </div>
            {/*Div end*/}
            <h1 className="text-white -mt-9 ml-28" style={{ fontSize: "18px" }}>
              Hourly-Based Pricing
            </h1>
            <p
              className="text-white text-sm mt-8 ml-12"
              style={{ fontWeight: "lighter" }}
            >
              We understand that not all rental needs are the same, That's why
              we offer <br /> an hourly-based pricing model that allows you to
              pay only for the hours <br />
              you use.
            </p>
          </div>
        </div>

        {/*Next div*/}
        <div className="card2con flex h-56 shadow-2xl">
          <div
            className="card3 h-52 rounded-lg"
            style={{ border: "1px solid rgb(15 23 42)", width: "520px" }}
          >
            {/*Next div*/}
            <div
              className="time h-11 w-11 rounded-lg mt-10 ml-12 shadow-2xl"
              style={{ border: "1px solid rgb(15 23 42)" }}
            >
              <img
                className="h-11 w-11 rounded-lg shadow-xl"
                src={image7}
                alt=""
              />
            </div>
            {/*Div end*/}
            <h1 className="text-white -mt-9 ml-28" style={{ fontSize: "18px" }}>
              Hourly-Based Pricing
            </h1>
            <p
              className="text-white text-sm mt-8 ml-12"
              style={{ fontWeight: "lighter" }}
            >
              We understand that not all rental needs are the same, That's why
              we offer <br /> an hourly-based pricing model that allows you to
              pay only for the hours <br />
              you use.
            </p>
          </div>

          {/*Next div*/}

          <div
            className="card4 h-52 rounded-lg ml-4 shadow-2xl"
            style={{ border: "1px solid rgb(15 23 42)", width: "520px" }}
          >
            {/*Next div*/}
            <div
              className="time h-11 w-11 shadow-2xl rounded-lg mt-10 ml-12"
              style={{ border: "1px solid rgb(15 23 42)" }}
            >
              <img
                className="h-11 w-11 rounded-lg shadow-xl"
                src={image7}
                alt=""
              />
            </div>
            {/*Div end*/}
            <h1 className="text-white -mt-9 ml-28" style={{ fontSize: "18px" }}>
              Hourly-Based Pricing
            </h1>
            <p
              className="text-white text-sm mt-8 ml-12"
              style={{ fontWeight: "lighter" }}
            >
              We understand that not all rental needs are the same, That's why
              we offer <br /> an hourly-based pricing model that allows you to
              pay only for the hours <br />
              you use.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keypoints;
