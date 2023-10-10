import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {Link} from "react-router-dom";

import OutlineMenuCloseSolid from "./../../OutlineMenuCloseSolid.png";
import logo from "./../../logo_200x200.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {text: "Home", href: "/"},
    {text: "Portfolio", href: "/portfolio"},
    {text: "Kontakt", href: "/kontakt"},
  ];

  const hasNotNav = !nav;

  const boxClassName = hasNotNav
    ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-400"
    : "fixed left-[-100%] ease-in-out duration-500";
  return (
    <nav id="navbar">
      <div className="relative justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <ul className="md:flex hidden bg-slate-400">
          <li className="justify-center">
            <a href="/">
              <img className="w-12 h-12" src={logo} alt="logo" />
            </a>
          </li>
          {links.map(({text, href}) => (
            <li className="p-4 border-b border-gray-600 hover:bg-slate-500">
              <Link to={href} className="p-4 hover:bg-slate-500">
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav((prev) => !prev)}>
          {hasNotNav ? (
            <AiOutlineClose color="black" />
          ) : (
            <img
              className="w-24 h-24 flex content-center object-center"
              src={OutlineMenuCloseSolid}
              alt="OutlineMenuCloseSolid"
            />
          )}
        </div>
        <div className={boxClassName}>
          <ul className="pt-24 uppercase bg-slate-400">
            <li className="border-b border-gray-600">
              <a href="/">
                <img
                  className="w-12 h-12 flex items-center object-center"
                  src={logo}
                  alt="logo"
                />
              </a>
            </li>
            {links.map(({text, href}) => (
              <li
                key={text}
                onClick={() => this.doClickHref(text)}
                className="p-4 border-b border-gray-600 hover:bg-slate-500"
              >
                <Link className="hover:text-white font-bold h-20" to={href}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
