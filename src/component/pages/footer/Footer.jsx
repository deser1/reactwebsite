import React from "react";

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Link: [
                { text: "Home", href: "/"},
                { text: 'Portfolio', href: '/portfolio'},
                { text: 'Kontakt', href: '/kontakt'},
            ]
        }
    }
    render(){
        return(
            <nav id="footer">
                Footer content
            </nav>
        )
    }
}
export default Footer;