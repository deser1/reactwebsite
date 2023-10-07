import React from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                { text: 'Home', link: '/'},
                { text: 'Portfolio', link: '/portfolio'},
                { text: 'Kontakt', link: '/kontakt'},
            ]
        }
    }
    doClickHref(text, index){
        return text;
    }
    render(){
        return (
            <nav>
                <ul className="flex">
                    
                    {this.state.items.map((item, index) =>(
                    
                    <li key={item.text} onClick={ () => this.doClickHref(item.text)} className="p-4 hover:bg-slate-500">
                        <a href={item.link}>{item.text}</a>
                    </li>
                    
                    ))}
                    
                        
                </ul>
            </nav>
        );
    }
}

export default Navbar;