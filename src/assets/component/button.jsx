import React from "react";
export default class Button extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="button-container">
                    <button onClick={this.props.playAndPause}>{this.props.isPlay  ? <i className="fa-sharp fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
                    <i className="fa-solid fa-rotate"></i>
            </section>
        )
    }
}