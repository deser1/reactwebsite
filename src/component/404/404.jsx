import React  from "react";

class PageNotFound extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {text: '404'}
            ]
        };
    }
    render(){
        return(
            <div className="flex p-4 h-screen font-bold w-7xl justify-center m-auto items-center duration-500 text-5xl">
                <h4>Pages not found 404</h4>
            </div>
        );
    }
}
export default PageNotFound;