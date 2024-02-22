/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Button = ({ text, color, fontClr,pad="p-2" }) => {
  return (
    <>
      <Link
        href="/"
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-14 overflow-hidden font-semibold transition-all duration-300 ease-in-out rounded hover:pl-14 hover:pr-6 group"
      >
        <span className="absolute right-0 pr-5 duration-200 ease-out">
          <div
            className={`${color} ${fontClr} ${pad} rounded-full group-hover:scale-0 duration-200 ease-out`}
          >
            <svg
              className="w-5 h-5 -rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </span>
        <span className="absolute left-5 ease-out duration-200">
          <div className={`${color} ${fontClr} ${pad} p-2 rounded-full`}>
            <svg
              className="w-5 h-5 -rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </span>
        <span
          className={`${color} relative w-full text-left transition-colors duration-200 ease-in-out  rounded-full px-4 font-bold ${fontClr} ${pad}`}
        >
          {text}
        </span>
      </Link>
    </>
  );
};

export default Button;
