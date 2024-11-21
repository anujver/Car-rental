import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import image from "../assets/bg.jpg";

const Questions = () => {
  return (
    <>
      {/* First container */}
      <div className="main flex mt-10">
        <div className="head">
          <h1 className="text-white text-4xl ml-52 mt-24">Frequent Asked</h1>
          <h1 className=" text-white text-4xl ml-52  mt-1">Questions</h1>
          <p className="text-white mt-5 ml-52">
            Still you have any questions? Contact our team via <br />
            support @currentvandi.com
          </p>
        </div>
        <div
          className="dropbox h-44 mt-20 ml-36 rounded-lg bg-slate-900 shadow-lg"
          style={{ border: "1px solid rgb(15 23 42)", width: "625px" }}
        >
          <p className="text-white mt-5 ml-10 bg-slate-900">
            How do i look a vehicle?
          </p>
          <div
            className="dropdown h-12 w-12 -mt-9 text-red-600 text-3xl px-2 py-2 bg-transparent"
            style={{ marginLeft: "490px" }}
          >
            <button>
              <IoIosArrowUp className="bg-slate-900" />
            </button>
          </div>
          <p className="text-white mt-8 ml-10 bg-slate-900">
            To book a vehicle, simply visit our website or download our mobile
            app. <br />
            choose our desired vehicle, select the dates and times for your
            rental and <br /> procced with the booking process.
          </p>
        </div>
      </div>
      {/* First container End */}
      {/* Image Container */}
      <div className="ev flex">
        <div
          className="charger h-72 w-96 ml-52 mt-6 rounded-lg shadow-xl"
          style={{ border: "1px solid rgb(15 23 42)" }}
        >
          <img className="w-full h-72 rounded-lg" src={image} alt="" />
        </div>
      </div>
      {/* ^^ Image container End ^^ */}
      {/* Questions */}
      {/* Question 1 */}
      <div
        className="question1 shadow-xl rounded-lg "
        style={{
          height: "53px",
          width: "622px",
          border: "1px solid rgb(15 23 42)",
          marginLeft: "705px",
          marginTop: "-275px",
        }}
      >
        <p className="text-white ml-8 mt-3">
          What are the requirments for renting a vehicle?
        </p>
        <div
          className="dropdown h-12 w-12 -mt-9 text-white text-2xl px-2 py-2 bg-transparent"
          style={{ marginLeft: "490px" }}
        >
          <button>
            <IoIosArrowDown className="bg-slate-950 mt-2 ml-16" />
          </button>
        </div>
      </div>
      {/* Question 2 */}
      <div
        className="question2 rounded-lg shadow-lg "
        style={{
          height: "53px",
          width: "622px",
          border: "1px solid rgb(15 23 42)",
          marginLeft: "705px",
          marginTop: "20px",
        }}
      >
        <p className="text-white ml-8 mt-3">Can i extend my rental duration?</p>
        <div
          className="dropdown h-12 w-12 -mt-9 text-white text-2xl px-2 py-2 bg-transparent"
          style={{ marginLeft: "490px" }}
        >
          <button>
            <IoIosArrowDown className="bg-slate-950 mt-2 ml-16" />
          </button>
        </div>
      </div>
      {/* Question 3 */}
      <div
        className="question3 shadow-lg  rounded-lg "
        style={{
          height: "53px",
          width: "622px",
          border: "1px solid rgb(15 23 42)",
          marginLeft: "705px",
          marginTop: "20px",
        }}
      >
        <p className="text-white ml-8 mt-3">
          Is insurance included in the rental price?
        </p>
        <div
          className="dropdown h-12 w-12 -mt-9 text-white text-2xl px-2 py-2 bg-transparent"
          style={{ marginLeft: "490px" }}
        >
          <button>
            <IoIosArrowDown className="bg-slate-950 mt-2 ml-16" />
          </button>
        </div>
      </div>
      {/* Question 4 */}
      <div
        className="question4 shadow-lg rounded-lg "
        style={{
          height: "53px",
          width: "622px",
          border: "1px solid rgb(15 23 42)",
          marginLeft: "705px",
          marginTop: "20px",
        }}
      >
        <p className="text-white ml-8 mt-3">
          What happend if the vehicle runs out of charge during my rental
          period?
        </p>
        <div
          className="dropdown h-12 w-12 -mt-9 text-white text-2xl px-2 py-2 bg-transparent"
          style={{ marginLeft: "490px" }}
        >
          <button>
            <IoIosArrowDown className="bg-slate-950 mt-2 ml-16" />
          </button>
        </div>
      </div>
      {/* Questions End */}
    </>
  );
};

export default Questions;
