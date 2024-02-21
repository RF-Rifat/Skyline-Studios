/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Button = ({ text, color }) => {
  return (
    <>
      <Link
        href="/"
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-14 overflow-hidden font-semibold transition-all duration-500 ease-in-out rounded hover:pl-14 hover:pr-6 group"
      >
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:">
          <div
            className={`${color} p-2 rounded-full group-hover:scale-0 duration-200 ease-out`}
          >
            <svg
              className="w-6 h-6 -rotate-45"
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
        <span className="absolute left-4 -transl group-hover:translate-x-0 ease-out duration-200">
          <div className={`${color} p-2 rounded-full`}>
            <svg
              className="w-6 h-6 -rotate-45"
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
          className={`${color} relative w-full text-left transition-colors duration-200 ease-in-out  rounded-full px-4 py-2 text-lg`}
        >
          {text}
        </span>
      </Link>
    </>
  );
};

export default Button;
