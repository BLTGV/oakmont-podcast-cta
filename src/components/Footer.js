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
        <div className="flex flex-row py-5 md:p-10">
          <div className="flex flex-row mx-auto">
            <p className="text-concrete-900 text-sm">
              © 2022 The Oakmont Group LLC - Created with ♥️ by &nbsp;
            </p>
            <a
              href="https://bltgv.com"
              target="_blank"
              rel="noreferrer"
              className="my-auto"
            >
              <svg
                className="w-10 fill-yellow-500"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 44.1 15.8"
                xmlSpace="preserve"
              >
                <g>
                  <g id="Front">
                    <g id="Layer_23_copy">
                      <polygon
                        class="st0"
                        points="44.1,0 26.8,0 26.8,3.2 32.6,3.2 32.6,15.8 38.2,15.8 38.2,3.2 44.1,3.2 			"
                      />
                      <polygon
                        class="st0"
                        points="32,12.7 23.4,12.7 23.4,0 17.8,0 17.8,15.8 32,15.8 			"
                      />
                      <path
                        class="st0"
                        d="M17.2,10.9c0-1.6-0.9-3-2.2-3.8c0.6-0.7,1-1.6,0.9-2.5C16,2.1,13.4,0,10.1,0H0v15.8h11.5
				C14.7,15.7,17.2,13.6,17.2,10.9z M9.2,6H5.1V3.2h4.2c1.1,0,1.9,0.6,1.9,1.4C11.1,5.5,10.2,6.2,9.2,6L9.2,6z M5.1,9.2H10
				c1.1-0.1,2.1,0.6,2.2,1.7c0,0,0,0,0,0c-0.1,1.1-1.1,1.9-2.2,1.7c0,0,0,0,0,0H5.1V9.2z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
