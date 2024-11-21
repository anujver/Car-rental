import { IoStarSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import image from "../assets/bg.jpg";

const Feedback = () => {
  return (
    <>
      {/* Head container */}
      <div className="head text-center ml-5">
        <h1 className="text-white text-4xl mt-20">Our Happy Customers</h1>
        <p className="text-white mt-5">
          Don't just take our word for it-read what our delighted customers have
          to say
        </p>
      </div>
      {/* Head container End */}
      {/*Cards*/}
      <div className="box h-96 w-3/4 ml-40 mt-16 flex">
        <div
          className="box1 1 h-80 w-80 mt-16 rounded-lg shadow-xl"
          style={{ border: "1px solid rgb(15 23 42)", marginLeft: "36px" }}
        >
          <p className="text-white mt-16 ml-7 block text-sm ">
            Renting an electric vehicle from current <br />
            vandi was a game-changer for my business <br />
            trips. it saved me money on fuel and <br />
            provided a comfortable ride, i highly <br />
            recommend their services for both personal <br /> and buisiness use.
          </p>
          <div
            className="comment1 w-80 h-20 bg-slate-900 rounded-lg shadow-xl"
            style={{
              border: "1px solid rgb(15 23 42)",
              marginTop: "54px",
              marginLeft: "-1px",
            }}
          >
            <div
              className="Image1  rounded-lg shadow-xl"
              style={{
                border: "1px solid rgb(15 23 42)",
                marginTop: "14px",
                marginLeft: "19px",
                height: "50px",
                width: "50px",
              }}
            >
              <img className="h-12 w-full rounded-lg" src={image} alt="" />
            </div>
            <p className="text-white -mt-9 ml-24 bg-transparent">John smith</p>
          </div>
          <div
            className="raitings1 w-40  h-20 ml-48 text-red-600 bg-transparent flex"
            style={{ marginTop: "-49px" }}
          >
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
          </div>
        </div>

        {/*Box 2*/}
        <div
          className="box2 1 h-80 w-80  rounded-lg shadow-xl"
          style={{
            border: "1px solid rgb(15 23 42)",
            marginLeft: "90px",
            marginTop: "-15px",
          }}
        >
          <p className="text-white mt-16 ml-7 block text-sm ">
            Renting an electric vehicle from current <br />
            vandi was a game-changer for my business <br />
            trips. it saved me money on fuel and <br />
            provided a comfortable ride, i highly <br />
            recommend their services for both personal <br /> and buisiness use.
          </p>
          <div
            className="comment1 w-80 h-20 bg-slate-900 shadow-xl  rounded-lg"
            style={{
              border: "1px solid rgb(15 23 42)",
              marginTop: "54px",
              marginLeft: "-1px",
            }}
          >
            <div
              className="Image1  rounded-lg shadow-xl"
              style={{
                border: "1px solid rgb(15 23 42)",
                marginTop: "14px",
                marginLeft: "19px",
                height: "50px",
                width: "50px",
              }}
            >
              <img className="h-12 w-full rounded-lg" src={image} alt="" />
            </div>
            <p className="text-white -mt-9 ml-24 bg-transparent">John smith</p>
          </div>
          <div
            className="raitings1 w-40  h-20 ml-48 text-red-600 bg-transparent flex"
            style={{ marginTop: "-49px" }}
          >
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
          </div>
        </div>

        {/*Box3*/}

        <div
          className="box3 1 h-80 w-80 mt-16 rounded-lg shadow-xl"
          style={{ border: "1px solid rgb(15 23 42)", marginLeft: "90px" }}
        >
          <p className="text-white mt-16 ml-7 block text-sm ">
            Renting an electric vehicle from current <br />
            vandi was a game-changer for my business <br />
            trips. it saved me money on fuel and <br />
            provided a comfortable ride, i highly <br />
            recommend their services for both personal <br /> and buisiness use.
          </p>
          <div
            className="comment1 shadow-xl w-80 h-20 bg-slate-900  rounded-lg"
            style={{
              border: "1px solid rgb(15 23 42)",
              marginTop: "54px",
              marginLeft: "-1px",
            }}
          >
            <div
              className="Image1 rounded-lg shadow-xl"
              style={{
                border: "1px solid rgb(15 23 42)",
                marginTop: "14px",
                marginLeft: "19px",
                height: "50px",
                width: "50px",
              }}
            >
              <img className="h-12 w-full rounded-lg" src={image} alt="" />
            </div>
            <p className="text-white -mt-9 ml-24 bg-transparent">John smith</p>
          </div>
          <div
            className="raitings1 w-40  h-20 ml-48 text-red-600 bg-transparent flex"
            style={{ marginTop: "-49px" }}
          >
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
            <IoStarSharp className="bg-transparent" size={20} />
          </div>
        </div>
      </div>
      {/* Next buttons */}
      <div
        className="nxtbtn h-12 w-52 -mt-12 flex"
        style={{ marginLeft: "638px " }}
      >
        <button
          className="btn1 h-12 w-12 text-white shadow-xl text-2xl py-3 px-3 rounded-lg"
          style={{ border: "1px solid rgb(15 23 42)", marginLeft: "20px" }}
        >
          <FaArrowLeft />
        </button>
        <div className="next text-red-600 flex text-4xl ml-5 mt-2">
          <HiDotsHorizontal />
          <HiDotsHorizontal />
        </div>
        <button
          className="btn1 h-12 w-12 ml-5 shadow-xl
           text-white text-2xl py-3 px-3 rounded-lg"
          style={{ border: "1px solid rgb(15 23 42)" }}
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default Feedback;
