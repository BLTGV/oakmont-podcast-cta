import React from "react";

const socialIconWidth = 26;

function Footer(props) {
  return (
    <div className="bg-shark w-full">
      <div className="flex flex-col md:flex-row mx-auto p-10 md:p-20">
        <div className="flex flex-col w-full md:w-4/12">
          <div className="flex flex-col mx-0 md:mx-auto">
            <div className="flex flex-row space-x-2">
              <span className="text-concrete my-auto">Social</span>
              <a
                href={process.env.REACT_APP_FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 512 512"
                  width={socialIconWidth}
                  fill="#ffffff"
                >
                  <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                </svg>
              </a>
              <a
                href={process.env.REACT_APP_LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 512 512"
                  width={socialIconWidth}
                  fill="#ffffff"
                >
                  <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                </svg>
              </a>
              <a
                href={process.env.REACT_APP_TWITTER_URL}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 512 512"
                  width={socialIconWidth}
                  fill="#ffffff"
                >
                  <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
                </svg>
              </a>
              <a
                href={process.env.REACT_APP_YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 512 512"
                  width={socialIconWidth}
                  fill="#ffffff"
                >
                  <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z" />
                </svg>
              </a>
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
            <a
              href={process.env.REACT_APP_POLICY_URL}
              target="_blank"
              rel="noreferrer"
              className="text-concrete-900 font-extralight text-sm mt-2 hover:underline"
            >
              Policy for The Oakmont Group
            </a>
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
              href={process.env.REACT_APP_BLTGV_URL}
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
