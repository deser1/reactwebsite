import React  from "react";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {text: 'Home'}
            ]
        };
    }
    render(){
        return(
            <div className="flex p-4 h-screen">
                <h1>Pages Home</h1>
            </div>
        );
    }
}
export default Home;