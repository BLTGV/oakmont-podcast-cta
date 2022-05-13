import React, { useEffect, useState } from "react";

function BelowTheFold(props) {
  const [rankStatus, setRankStatus] = useState("");
  const [rankType, setRankType] = useState("");
  const [rankDownloadTitle, setRankDownloadTitle] = useState("");
  const [rankDownloadDescription, setRankDownloadDescription] = useState("");
  const [rankDescription, setRankDescription] = useState("");
  const [rankImg, setRankImg] = useState(null);
  const [hideResult, setHideResult] = useState(true);
  const [downloadLink, setDownloadLink] = useState("");

  const setRankDesc = () => {
    for (let i = 0; i < props.rawResult.length; i++) {
      if (props.rankName === props.rawResult[i].c[4].v) {
        const result = props.rawResult[i].c;
        setRankType(result[4] !== null ? result[4].v : "");
        setRankStatus(result[5] !== null ? result[5].v : "");
        setRankDownloadDescription(result[6] !== null ? result[6].v : "");
        setRankDownloadTitle(result[8] !== null ? result[8].v : "");
        setRankImg(result[7] !== null ? result[7].v : "");
        setRankDescription(result[9] !== null ? result[9].v : "");
        setDownloadLink(result[3] !== null ? result[3].v : "##");
      }
    }
  };

  useEffect(() => {
    setRankDesc();
    if (props.rank !== null) {
      setHideResult(false);
    } else {
      setHideResult(true);
    }
  }, [props.rank]);

  return (
    <div
      className={`${
        hideResult ? "" : "flex flex-row md:flex-col bg-concrete py-5 md:py-40"
      }`}
      id="resultPage"
    >
      {hideResult ? (
        <div></div>
      ) : (
        <div className="flex flex-col md:flex-row m-auto px-2 py-0 md:px-40 w-11/12 md:w-8/12 my-10 md:my-0">
          <div className="flex flex-col my-auto w-full">
            <span className="text-lg md:text-xl text-center text-shark">
              {rankStatus}
            </span>
            <span className="text-4xl md:text-5xl mt-10 font-bold text-center text-shark">
              {rankType}
            </span>
            <div className="w-full bg-shark mt-14 rounded-xl">
              <figure className="relative w-full md:h-full">
                <img
                  className="md:object-cover md:h-full w-full"
                  src={rankImg}
                  alt="Rank type"
                ></img>
                <figcaption className="absolute -mt-24 text-white px-2 md:px-10 py-10 md:py-4">
                  <div className="bg-shark py-3 px-5 md:px-10 rounded-full">
                    <span>{rankType}</span>
                  </div>
                </figcaption>
              </figure>
              <div className="p-10 text-concrete text-sm">
                {rankDescription}
              </div>
            </div>
            {rankDownloadDescription !== "" ? (
              <div className="flex flex-col md:flex-row bg-white mt-10 px-2 md:px-10 py-10 border-l-4 border-red-500">
                <div
                  className={`flex flex-col my-auto ${
                    props.rank !== null && props.rank !== 1 ? null : "mx-auto"
                  }`}
                >
                  <span className="text-center md:text-left font-light text-md px-0 md:px-10 text-shark">
                    {rankDownloadDescription}
                  </span>
                  <span className="text-center md:text-left font-bold text-md px-0 md:px-10 mt-3 md:mt-0 text-shark">
                    "{rankDownloadTitle}"
                  </span>
                </div>
                {props.rank !== null && props.rank !== 1 ? (
                  <div className="m-auto mt-5 md:mt-0">
                    <a
                      href={downloadLink}
                      className="py-2 px-7 bg-shark text-concrete font-light text-sm rounded-md mx-auto w-full md:w-100"
                    >
                      Download
                    </a>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default BelowTheFold;
