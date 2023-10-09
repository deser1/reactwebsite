import React from "react";
import logo from './../../logo_200x200.png';
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
    handleNav = () =>{
        return this.state.setNav(!this.state.nav);
    }
    render(){
        return (
                
                <nav>
                    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                        <ul className="flex hidden bg-slate-400">
                            <li><a href="/"><img className="w-12 h-12" src={logo} alt="logo"/></a></li>
                            {this.state.links.map((item, index) =>(
                            
                            <li key={item.text} onClick={ () => this.doClickHref(item.text)} className="p-4 hover:bg-slate-500">
                                <a className="hover:text-white font-bold h-20" href={item.href}>{item.text}</a>
                            </li>
                            
                            ))}
                            
                                
                        </ul>
                        <div className="z-100" onClick={this.handleNav}>
                            {!this.state.nav ? <AiOutlineClose/> : <AiOutlineMenu size={20}/>}
                        </div>
                        <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-400">
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