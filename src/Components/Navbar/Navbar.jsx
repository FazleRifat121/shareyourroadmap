import { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-2 shadow-md">
        <div>
          <img
            src={logo}
            alt="share your logo"
            className="md:w-34 w-full max-w-[150px]"
          />
        </div>
        {/* for large device  */}
        <div className="lg:flex items-center gap-6 hidden">
          <h1>create</h1>
          <h1>sign in</h1>
          <h1>logout</h1>
        </div>
        {/* for small device  */}
        <div className="lg:hidden ml-auto z-50" onClick={() => setOpen(!open)}>
          {open ? <RxCross1 size={24} /> : <FaBars size={24} />}
        </div>
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
