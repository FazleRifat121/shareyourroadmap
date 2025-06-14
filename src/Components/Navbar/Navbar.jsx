import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { SlMagnifier } from "react-icons/sl";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <img
            src={logo}
            alt="share your logo"
            className="w-[120px] object-contain"
          />
          <div className="flex-1 hidden sm:block mr-3 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 p-2 px-4 rounded-full placeholder:text-gray-600"
            />
            <SlMagnifier className="absolute top-3.5 right-6" />
          </div>
        </div>
        {/* for large devices */}
        <div className="lg:flex items-center gap-6 hidden">
          <h1>create</h1>
          <h1>sign in</h1>
          <h1>logout</h1>
        </div>
        {/* for small devices  */}
        <div className="lg:hidden ml-auto" onClick={() => setOpen(!open)}>
          {open ? <RxCross1 size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      <div className="sm:hidden px-4 pb-3 relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 p-2 px-4 rounded-full placeholder:text-gray-600"
        />
        <SlMagnifier className="absolute top-3.5 right-8" />
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-4 pt-20">
          <h1>create</h1>
          <h1>sign in</h1>
          <h1>logout</h1>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
