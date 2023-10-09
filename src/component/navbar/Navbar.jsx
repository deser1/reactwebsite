import React from "react";
import logo from './../../logo_200x200.png';
import OutlineMenuBarSolid from './../../OutlineMenuBarSolid.png';
import OutlineMenuCloseSolid from './../../OutlineMenuCloseSolid.png';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            links: [
                { text: 'Home', href: '/'},
                { text: 'Portfolio', href: '/portfolio'},
                { text: 'Kontakt', href: '/kontakt'},
            ],
            nav: false,
            setNav: false,
        }
        
    }
    doClickHref(text, index){
        return text;
    }
    handleNav = (e) =>{
        return this.setState({setNav : e });/** alert(e); */
    }
    render(){
        return (
                
                <nav id="navbar">
                    <div className="relative justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                        <ul className="md:flex hidden bg-slate-400">
                            <li className="justify-center"><a href="/"><img className="w-12 h-12" src={logo} alt="logo"/></a></li>
                            {this.state.links.map((item, index) =>(
                            
                            <li key={item.text} onClick={ () => this.doClickHref(item.text)} className="p-4 hover:bg-slate-500">
                                <a className="hover:text-white font-bold h-20" href={item.href}>{item.text}</a>
                            </li>
                            
                            ))}
                            
                        </ul>
                        <div onClick={ () => this.handleNav(!this.state.nav)} className="block md:hidden sm:visible">
                            {!this.state.nav ? (<AiOutlineClose /> === null ? <AiOutlineClose size={20} /> : <img className="w-12 h-12 flex"src={OutlineMenuCloseSolid} alt="OutlineMenuCloseSolid" />) : (<AiOutlineMenu /> === null ? <AiOutlineMenu size={20}/> : <img className="w-12 h-12 flex"src={OutlineMenuBarSolid} alt="OutlineMenuBarSolid" />)}
                        </div>
                        <div className={!this.state.nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-400' : 'fixed left-[-100%] ease-in-out duration-500'}>
                            <ul className="pt-24 uppercase bg-slate-400">
                                <li className="border-b border-gray-600"><a href="/"><img className="w-12 h-12 flex items-center object-center"  src={logo} alt="logo"/></a></li>
                                {this.state.links.map((item, index) =>(
                                
                                <li key={item.text} onClick={ () => this.doClickHref(item.text)} className="p-4 border-b border-gray-600 hover:bg-slate-500">
                                    <a className="hover:text-white font-bold h-20" href={item.href}>{item.text}</a>
                                </li>
                                
                                ))}
                                
                                    
                            </ul>
                        </div>
                    </div>
                </nav>
                
        );
    }
}

export default Navbar;