import React from "react";
import { Link } from "react-scroll";
import Header from "./Header";

function AboveTheFold(props) {
  const checkRankHandler = () => {
    let locRank = 0;

    for (let i = 0; i < props.rowData.length; i++) {
      if (props.download >= props.rowData[i]) {
        locRank = i + 1;
        props.setRank(locRank);
        for (let j = 0; j < props.rawResult.length; j++) {
          if (props.rowData[i] === props.rawResult[j].c[0].v) {
            props.setRankName(props.rawResult[j].c[4].v);
          }
        }
        break;
      } else props.setRank(locRank);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-shark bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(51,55,56, 0.9), rgba(51,55,56, 0.9)), url("/bg_header.jpg")`,
      }}
    >
      <Header />
      <div className="flex flex-col md:flex-row my-auto">
        <div className="w-full md:w-1/2 px-10 my-auto">
          <div className="md:w-3/4 mx-auto md:mr-0">
            <h1 className="text-concrete text-6xl font-bold mt-10 md:mt-0">
              How popular is your podcast?
            </h1>
            <p className="text-concrete-500 mt-10 text-lg font-light">
              Beginner? Intermediate? Advanced? Awesome?
            </p>
            <div className="w-fit mt-10 border-l-2 pl-5 text-sm md:text-md">
              <span className="text-concrete">
                This is an estimate based on data provided by Libsyn:
              </span>
              <ul className="text-concrete list-disc list-inside">
                <li>
                  <strong>Beginner:</strong> from 0 to 50% of podcasts
                </li>
                <li>
                  <strong>Intermediate:</strong> more popular than 50% of
                  podcasts
                </li>
                <li>
                  <strong>Advanced:</strong> more popular than 80% of podcasts
                </li>
                <li>
                  <strong>Awesome:</strong> more popular than 95% of podcasts
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10 md:p-36 m-auto">
          <div className="m-auto p-0 w-full">
            <div className="flex flex-col bg-shark-400 rounded-xl py-10 px-10 mt-10">
              <p className="text-concrete-900 text-center mb-5">
                Please enter your downloads in the first 30 days
              </p>
              <input
                type="number"
                className="bg-shark-400 rounded-md mr-4 grow h-10 w-full p-7 border-2 border-concrete text-concrete"
                onChange={(e) => {
                  props.setDownload(e.target.value);
                  props.setRank(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkRankHandler();
                  }
                }}
              ></input>
              <Link
                className="py-4 px-9 w-full mx-auto bg-concrete text-black font-light text-sm rounded-md mt-3 cursor-pointer"
                onClick={(e) => {
                  checkRankHandler();
                }}
                activeClass="active"
                to="resultPage"
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="text-center">Compare</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
