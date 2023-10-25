import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-router-dom";

import logo from "./../../logo_200x200.png";
const NavbarLink = (props) =>{//debugger;
  return (
    <>
    <li className={props.contenerLinkClassName}>
      <Link 
      to={props.href} 
      className={props.linkClassName}
      >
        {props.src ? <img className="w-12 h-12" src={logo} alt="logo" /> : props.textLink}
      </Link>
    </li>
    </>
  );
};
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
        <ul className="md:flex hidden bg-slate-400"><NavbarLink href="/" textLink="testname" contenerLinkClassName="justify-center" linkClassName="p-4 hover:bg-slate-500 font-bold" />
          <li className="justify-center">
            <Link to={links.href ? "/" : "#"}>
              <img className="w-12 h-12" src={logo} alt="logo" />
            </Link>
          </li>
          {links.map(({text, href, i}) => (
            <li key={i} className="p-4 border-b border-gray-600 hover:bg-slate-500">
              <Link to={href} className="p-4 hover:bg-slate-500 font-bold">
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute flex sm:flex sm:visible md:hidden lg:hidden xl:hidden 2xl:hidden z-[1000]" onClick={() => setNav((prev) => !prev)}>
          {hasNotNav ? (
            <AiOutlineClose color="black" size="50"/>
          ) : (
            <AiOutlineMenu color="black" size="50"/>
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
            {links.map(({text, href, i}) => (
              <li key={i} className="p-4 border-b border-gray-600 hover:bg-slate-500">
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
