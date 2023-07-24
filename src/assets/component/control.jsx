import React from "react";



export default class Control extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="control-container">
                <section className="containing">
                    <p>MINUTE</p>
                    <button className="up" disabled = {this.props.interval  ?  1 : 0} onClick={() => {this.props.minuteHandler(1)}}><i className="fa-solid fa-chevron-up"></i></button>
                    <div className="control-display">{this.props.controlTime}</div>
                    <button className="down" disabled = {this.props.interval ?  1 : 0} onClick={() => {this.props.minuteHandler(-1)}}><i className="fa-solid fa-chevron-up fa-rotate-180"></i></button>
                </section>
                <section className="containing">
                    <p>BREAK</p>
                    <button className="up" disabled = {this.props.interval  ?  1 : 0} onClick={() => {this.props.breakHandler(1)}}><i className="fa-solid fa-chevron-up"></i></button>
                    <div className="control-display">{this.props.break}</div>
                    <button className="down" disabled = {this.props.interval  ?  1 : 0} onClick={() => {this.props.breakHandler(-1)}}><i className="fa-solid fa-chevron-up fa-rotate-180"></i></button>
                </section>
            </section>
        )
    }
}