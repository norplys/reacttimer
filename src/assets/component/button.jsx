import React from "react";
export default class Button extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="button-container">
                    <i className="fa-solid fa-play"></i>
                    <i className="fa-sharp fa-solid fa-pause"></i>
                    <i class="fa-solid fa-rotate"></i>
            </section>
        )
    }
}