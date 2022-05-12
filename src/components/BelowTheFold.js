import React, { useEffect, useState } from "react";

function BelowTheFold(props) {
  const [rankStatus, setRankStatus] = useState("");
  const [rankType, setRankType] = useState("");
  const [rankDownloadTitle, setRankDownloadTitle] = useState("");
  const [rankDownloadDescription, setRankDownloadDescription] = useState("");
  const [rankDescription, setRankDescription] = useState("");
  const [rankImg, setRankImg] = useState(null);
  const [hideResult, setHideResult] = useState(true);

  const setRankDesc = () => {
    switch (props.rank) {
      case 0:
        setRankType("Beginner");
        setRankStatus("Your podcast is between 0 and 50% of podcasts:");
        setRankDownloadDescription(
          "If you would like to improve, download this free PDF:"
        );
        setRankImg("/ranks/beginner.jpg");
        setRankDownloadTitle("Beginner's Guide to Podcast Promotion");
        setRankDescription(
          "It looks like you are just starting on your road to podcast promotion. Start with understanding your listeners, developing a show notes page, being consistent, beginning your social media strategy, and begin to structure your time."
        );
        break;
      case 1:
        setRankType("Awesome");
        setRankStatus("You are more popular than 95% of the podcasts:");
        setRankDownloadDescription("Keep up the good work!!");
        setRankImg("/ranks/awesome.jpg");
        setRankDescription("Keep up the good work!!");
        break;
      case 2:
        setRankType("Advanced");
        setRankStatus("You are more popular than 80% of the podcasts:");
        setRankDownloadDescription(
          "If you would like to improve, download this free PDF:"
        );
        setRankImg("/ranks/advanced.jpg");
        setRankDownloadTitle("Advanced Guide to Podcast Promotion");
        setRankDescription(
          "Looks like you have been in the podcast promotion game for a while. Probably you have gone through the checklists, made a ton of mistakes, had some success, and need some advanced tips. Time to examine the quality of your podcast, get your developers to work at optimizing your website, at least think about video, expand your test of paid advertising, and develop a community."
        );
        break;
      case 3:
        setRankType("Intermediate");
        setRankStatus("You are more popular than 50% of the podcasts:");
        setRankDownloadDescription(
          "If you would like to improve, download this free PDF:"
        );
        setRankImg("/ranks/intermediate.jpg");
        setRankDownloadTitle("Intermediate's Guide to Podcast Promotion");
        setRankDescription(
          "Looks like you are midway on your journey of podcast promotion. You may have a few podcast under your belt but wanting to grow the show. Now is the time to get to know you audience better, get serious about email, reach out to other podcasts and be a guest, farm out some of the promotion work, and consider spending money for promotion."
        );
        break;
      case 4:
        setRankType("Beginner");
        setRankStatus("Your podcast is between 0 and 50% of podcasts:");
        setRankDownloadDescription(
          "If you would like to improve, download this free PDF:"
        );
        setRankDownloadTitle("Beginner's Guide to Podcast Promotion");
        setRankImg("/ranks/beginner.jpg");
        setRankDescription(
          "It looks like you are just starting on your road to podcast promotion. Start with understanding your listeners, developing a show notes page, being consistent, beginning your social media strategy, and begin to structure your time."
        );
        break;
      default:
        setRankType(null);
        setRankStatus(null);
        setRankDownloadDescription(null);
        setRankImg(null);
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
      {/* <Element name="resultPageBegin"></Element> */}
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
                  <button className="py-2 px-7 bg-shark text-concrete font-light text-sm rounded-md mx-auto w-full md:w-100">
                    Download
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BelowTheFold;
