import React  from "react";

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {text: 'Portfolio'}
            ]
        };
    }
    render(){
        return(
            <div className="flex p-4 h-screen">
                <h1>Pages Portfolio</h1>
            </div>
        );
    }
}
export default Portfolio;