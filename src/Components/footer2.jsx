import image from "../assets/bg.jpg";

const Footertwo = () => {
  return (
    <>
      <div
        className="footer bg-slate-900 w-full  flex"
        style={{ height: "400px" }}
      >
        <div className="search  w-96 mt-10 ml-60 text-white bg-transparent ">
          <h1 className="text-3xl mt-12 bg-transparent">Current Vandi</h1>
          <p className="mt-8 bg-transparent">Subscribe to our Newsletter</p>
          <input
            type=" text"
            placeholder="Enter your email"
            className="h-9 w-60 bg-slate-950 mt-4 rounded-sm px-5"
          />
          <button className="bg-red-600 rounded-sm h-9 w-20 ml-1">
            Subscribe
          </button>
        </div>
        <div className="list1 h-56 mt-20 bg-transparent ml-6">
          <a href="#" className="text-white">
            <p className="bg-transparent">Home</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white ">
            <p className="mt-1 bg-transparent">Our benifits</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">Our pricing</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">Our testimonials</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">FAQ</p>
          </a>
        </div>

        <div className="list2 h-56 mt-20 bg-transparent ml-10">
          <a href="#" className="text-white">
            <p className="bg-transparent">Process</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white ">
            <p className="mt-1 bg-transparent">Booking vehicle</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">Charging vehicle</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">Billing</p>
          </a>{" "}
        </div>

        <div className="list3 h-56 mt-20 bg-transparent ml-10">
          <a href="#" className="text-white">
            <p className="bg-transparent">Vehicle</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white ">
            <p className="mt-1 bg-transparent">Compact vehicle</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">Luxury vehicle</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">Eco-Van vehicle</p>
          </a>{" "}
        </div>

        <div className="list4 h-56 mt-20 bg-transparent ml-10">
          <a href="#" className="text-white">
            <p className="bg-transparent">About us</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white ">
            <p className="mt-1 bg-transparent">Our history</p>
          </a>{" "}
          <br />
          <a href="#" className="text-white">
            <p className="-mt-5 bg-transparent">Team members</p>
          </a>{" "}
        </div>

        <div
          className="copyright w-96 h-12 -ml-96 flex bg-transparent"
          style={{ width: "995px", marginLeft: "-985px", marginTop: "310px" }}
        >
          <p className="text-white py-3 bg-transparent">
            @Current vandi, All rights reserved
          </p>
          <a href="#" className="text-white py-3 ml-36 bg-transparent">
            Terms |
          </a>
          <a href="#" className="text-white py-3 ml-1 bg-transparent">
            Privacy policy |
          </a>
          <a href="#" className="text-white py-3 ml-1 bg-transparent">
            Cookie policy
          </a>
          <div className="social flex bg-transparent">
            <div
              className="social1 h-10  w-10 rounded-lg mt-1 ml-48"
              style={{ border: "1px solid white" }}
            >
              {" "}
              <img
                className="rounded lg h-10 w-full shadow-xl"
                src={image}
                alt=""
              />
            </div>
            <div
              className="social2 h-10  w-10 rounded-lg mt-1 ml-3"
              style={{ border: "1px solid white" }}
            >
              {" "}
              <img
                className="rounded lg h-10 w-full shadow-xl"
                src={image}
                alt=""
              />
            </div>
            <div
              className="social3 h-10  w-10 rounded-lg mt-1 ml-3"
              style={{ border: "1px solid white" }}
            >
              <img
                className="rounded lg h-10 w-full shadow-xl"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footertwo;
