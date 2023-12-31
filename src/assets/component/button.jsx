import React from "react";
export default class Button extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="button-container">
                    <button disabled = {!this.props.handlePlay} onClick={this.props.playAndPause}>{this.props.isPlay  ? <i className="fa-sharp fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
                    <button onClick={this.props.reset}><i className="fa-solid fa-rotate"></i></button>
            </section>
        )
    }
}