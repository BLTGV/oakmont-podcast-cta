import React from "react";

function Footer(props) {
  return (
    <div className="bg-shark w-full">
      <div className="flex flex-col md:flex-row mx-auto p-10 md:p-20">
        <div className="flex flex-col w-full md:w-4/12">
          <div className="flex flex-col mx-0 md:mx-auto">
            <div className="flex flex-row">
              <span className="text-concrete my-auto">Social</span>
              <img
                className="w-5 h-5 rounded-full ml-5 my-auto"
                src="https://via.placeholder.com/25"
                alt="social media"
              />
              <img
                className="w-5 h-5 rounded-full ml-4 my-auto"
                src="https://via.placeholder.com/25"
                alt="social media"
              />
              <img
                className="w-5 h-5 rounded-full ml-4 my-auto"
                src="https://via.placeholder.com/25"
                alt="social media"
              />
              <img
                className="w-5 h-5 rounded-full ml-4 my-auto"
                src="https://via.placeholder.com/25"
                alt="social media"
              />
            </div>
            <span className="text-concrete-900 mt-2 text-sm">
              Follow along on social media.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:px-5 mt-10 md:mt-0 w-full md:w-4/12">
          <div className="flex flex-col mx-0 md:mx-auto">
            <span className="text-concrete font-bold text-md">Email</span>
            <a
              href={"mailto:" + process.env.REACT_APP_EMAIL_ADDRESS_CONTACT}
              className="text-concrete-900 font-extralight text-sm mt-2 hover:underline"
            >
              {process.env.REACT_APP_EMAIL_ADDRESS_CONTACT}
            </a>
          </div>
        </div>
        <div className="flex flex-col md:px-5 mt-5 md:mt-0 w-full md:w-4/12">
          <div className="flex flex-col mx-0 md:mx-auto">
            <span className="text-concrete font-bold text-md">Policy</span>
            <span className="text-concrete-900 font-extralight text-sm mt-2 hover:underline">
              Policy for The Oakmont Group
            </span>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-concrete">
        <p className="text-concrete-900 text-center py-5 md:p-10 text-sm">
          Oakmont Podcast CTA &mdash; Copyright &copy; 2022{" "}
          <a
            href="https://bltgv.com"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-500"
          >
            BLT
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
