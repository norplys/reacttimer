import React from "react";
export default class Display extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="display-container" style={((this.props.second === 0 && this.props.minute === 0) ? {color : 'red'} : (this.props.second < 10 && this.props.minute === 0) ? {color : 'orange'} : {color : 'white'})}>
                {this.props.minute < 10 ? '0' + this.props.minute : this.props.minute}
                :
                {this.props.second < 10 ? '0' + this.props.second : this.props.second}
            </section>
        )
    }
}