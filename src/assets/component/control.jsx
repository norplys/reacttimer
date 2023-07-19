import React from "react";



export default class Control extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="control-container">
                <section className="containing">
                    <button className="up" onClick={() => {this.props.minuteUp(), this.props.control()}}><i className="fa-solid fa-chevron-up"></i></button>
                    <div className="control-display">{this.props.controlTime}</div>
                    <button className="down" onClick={this.props.minuteDown}><i className="fa-solid fa-chevron-up fa-rotate-180"></i></button>
                </section>
                <section className="containing">
                    <button className="up" onClick={this.props.breakUp}><i className="fa-solid fa-chevron-up"></i></button>
                    <div className="control-display">{this.props.break}</div>
                    <button className="down" onClick={this.props.breakDown}><i className="fa-solid fa-chevron-up fa-rotate-180"></i></button>
                </section>
            </section>
        )
    }
}