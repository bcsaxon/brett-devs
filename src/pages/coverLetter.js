import React, { useState } from "react";

function CoverLetter() {
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  // const [favColor, setfavColor] = useState("");

  return (
    <div
      id="site-wrapper"
      className="flex flex-wrap items-center justify-center w-screen p-8 site-wrapper"
    >
      <div className="w-3/4 p-10 text-center border-2 border-gray-400 shadow-lg rounded-3xl h-3/4">
        <p className="mb-3 text-xl">
          part of my job as a developer is to automate all those mind-numbing,
          exhausting, time consuming, antiquated tasks.
        </p>
        <p className="mb-10 text-xl">this is one of those tasks.😉</p>
        <form className="mb-10 space-evenly">
          {/* <label className="ml-10">
            Favorite Color
            <input
              className="p-1 ml-1.5 text-center border-2 border-gray-400 shadow-lg rounded-2xl h-1/4"
              type="text"
              onChange={(e) => setfavColor(e.target.value)}
            />
          </label> */}
          <label>
            Your Name:
            <input
              className=" p-1 ml-1.5 text-center border-2 border-gray-400 shadow-lg rounded-2xl h-1/4"
              name="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="ml-10">
            Company Name:
            <input
              className="p-1 ml-1.5 text-center border-2 border-gray-400 shadow-lg rounded-2xl h-1/4"
              type="text"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
        </form>
        <h2 className="text-2xl">Cover Letter</h2>
        <br />
        <h6 className="mb-2 text-left">
          Dear{" "}
          <span className={"text-xl font-bold text-green-600"}>
            {firstName}
          </span>
          ,
        </h6>
        <p className="text-l">
          I am writing in application for the front-end developer position at
          <span className="text-xl font-bold text-green-600">
            {" "}
            {companyName}
          </span>{" "}
          as advertised on LinkedIn. My training and experience in the field of
          computer programming and web design, along with my ability to meet
          deadlines and code well make me the perfect candidate for the job. I
          know that I would be a valuable addition to the team at
          <span className="text-xl font-bold text-green-600">
            {" "}
            {companyName}
          </span>
          . Please find attached my resume. Feel free to contact me directly
          should you require anything further. Thank you for your time and
          consideration. I look forward to hearing from you.
          <br /> Sincerely, Brett
        </p>
      </div>
    </div>
  );
}

export default CoverLetter;
