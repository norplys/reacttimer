import React from "react";
export default class Display extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="display-container">
                {this.props.minute < 10 ? '0' + this.props.minute : this.props.minute}
                :00
            </section>
        )
    }
}