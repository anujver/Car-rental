import image11 from "../assets/contactbg.png";
import image12 from "../assets/bg.jpg";
const Detailspage = () => {
  return (
    <>
      {/*Next div*/}
      <div className="ben mt-20 text-center ml-3">
        <h1 className="text-white text-4xl">We'd love to here From you</h1>
        <p className="text-white mt-4">
          We're here to assist! Feel free to react out to our friendly customer
          support team for any inquiries or assistance <br /> regarding our
          electric car rental service
        </p>
      </div>
      {/*Next div*/}
      <div
        className="details mt-12 ml-44 rounded-lg bg-slate-900 "
        style={{
          border: "1px solid rgb(15 23 42)",
          height: "750px",
          width: "1170px",
          backgroundImage: `url(${image11})`,
        }}
      >
        <div
          className="transparentpage mt-16 ml-16 rounded-lg bg-transparent shadow-2xl bg-blend-hard-light"
          style={{
            border: "1px solid rgb(15 23 42)",
            height: "470px",
            width: "1030px",
          }}
        >
          {/* Heading section */}
          <div className="headings flex bg-transparent">
            <h1
              className="bg-transparent text-white text-1xl mt-12 ml-12"
              style={{ fontWeight: "600" }}
            >
              First Name
            </h1>
            <h1
              className="bg-transparent text-white text-1xl mt-12 "
              style={{ fontWeight: "600", marginLeft: "410px" }}
            >
              Last Name
            </h1>
          </div>
          {/* Input section */}
          <div className="headings flex  mt-1 bg-transparent text-white">
            <input
              className=" ml-12 h-12  bg-transparent "
              type="text"
              placeholder="Enter First Name"
              style={{
                width: "440px",
                borderWidth: "1px",
                borderBottomColor: "1px solid rgb(15 23 42)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
            />
            <input
              className=" ml-12 h-12  bg-transparent text-white "
              type="text"
              placeholder="Enter Last Name"
              style={{
                width: "440px",
                borderWidth: "1px",
                borderBottomColor: "1px solid rgb(15 23 42)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
            />
          </div>
          {/* Heading section */}
          <div className="headings flex bg-transparent">
            <h1
              className="bg-transparent text-white text-1xl mt-10 ml-12"
              style={{ fontWeight: "600" }}
            >
              Email
            </h1>
            <h1
              className="bg-transparent text-white text-1xl mt-10  "
              style={{ fontWeight: "600", marginLeft: "450px" }}
            >
              Phone Number
            </h1>
          </div>
          {/* Input section */}
          <div className="headings flex  mt-1 bg-transparent">
            <input
              className=" ml-12 h-12 w-96 bg-transparent  text-white "
              type="text"
              placeholder="Enter Your Email"
              style={{
                width: "440px",
                borderWidth: "1px",
                borderBottomColor: "1px solid rgb(15 23 42)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
            />
            <input
              className=" ml-12 h-12 w-96 bg-transparent text-white "
              type="text"
              placeholder="Enter Phone number"
              style={{
                width: "440px",
                borderWidth: "1px",
                borderBottomColor: "1px solid rgb(15 23 42)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
            />
          </div>
          {/* Heading section */}
          <div className="headings flex bg-transparent">
            <h1
              className="bg-transparent text-white text-1xl mt-10 ml-12"
              style={{ fontWeight: "600" }}
            >
              Message
            </h1>
          </div>
          {/* Input section */}
          <div className="headings flex  mt-1 bg-transparent text-white">
            <input
              className=" ml-12 h-12  bg-transparent "
              type="text"
              placeholder="Enter Your Message"
              style={{
                width: "925px",
                borderWidth: "1px",
                borderBottomColor: "1px solid rgb(15 23 42)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
            />
          </div>
          {/* Button */}
          <div className="btn bg-transparent">
            <button
              className="bg-red-700 w-24 h-10 rounded-lg text-white mt-7"
              style={{ marginLeft: "460px" }}
            >
              Send
            </button>
          </div>
          {/* Address */}
          <div
            className="address rounded-lg mt-20 bg-slate-900 shadow-2xl"
            style={{
              border: "1px solid rgb(15 23 42)",
              height: "100px",
              width: "1029px",
            }}
          >
            <div className="address flex bg-transparent">
              <h1 className="bg-transparent text-white ml-10 mt-6">Address</h1>
              <h1 className="bg-transparent text-white ml-96 mt-6">
                Give us a call
              </h1>
            </div>
            <div className="address2 flex bg-transparent">
              <h1 className="bg-transparent text-white ml-10 mt-1">
                95, Thottakara st, kaveripakkam india - 632508
              </h1>
              <h1 className="bg-transparent text-white ml-24 mt-1">
                +91 00000 00000
              </h1>
            </div>
            {/* Social links */}
            <div
              className="social flex bg-transparent -mt-12"
              style={{ marginLeft: "660px" }}
            >
              <div
                className="social1 h-9  w-9 rounded-lg mt-1 ml-48"
                style={{ border: "1px solid rgb(15 23 42)" }}
              >
                <img
                  className="rounded-lg h-9 w-full shadow-2xl"
                  src={image12}
                  alt=""
                />
              </div>
              <div
                className="social2 h-9  w-9 rounded-lg mt-1 ml-3 shadow-2xl"
                style={{ border: "1px solid rgb(15 23 42)" }}
              >
                <img
                  className="rounded-lg h-9 w-full shadow-2xl"
                  src={image12}
                  alt=""
                />
              </div>
              <div
                className="social3 h-9  w-9 rounded-lg mt-1 ml-3 shadow-2xl"
                style={{ border: "1px solid rgb(15 23 42)" }}
              >
                <img
                  className="rounded-lg h-9 w-full shadow-2xl"
                  src={image12}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailspage;
