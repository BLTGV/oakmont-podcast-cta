import React from "react";

function Header(props) {
  return (
    <div
      className="flex flex-row px-5 py-5 md:px-20 md:py-10 font-extralight text-concrete-900"
      id="header"
    >
      <a href="/" className="w-2/12 md:w-1/12">
        <img src="/oakmont-logo.png" className="w-full" alt="Oakmont logo" />
      </a>
      <span className="grow">&nbsp;</span>
      <a
        href="https://theoakmontgroupllc.com"
        target="_blank"
        rel="noreferrer"
        className="flex flex-row hover:underline text-sm my-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <span className="my-auto">&nbsp; Back to the main site</span>
      </a>
    </div>
  );
}

export default Header;
