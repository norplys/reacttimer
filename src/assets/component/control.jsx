import React from "react";



export default class Control extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="control-container">
                <section className="containing">
                    <button className="up"><i class="fa-solid fa-chevron-up"></i></button>
                    <div className="control-display"></div>
                    <button className="down"><i class="fa-solid fa-chevron-up fa-rotate-180"></i></button>
                </section>
                <section className="containing">
                    <button className="up"><i class="fa-solid fa-chevron-up"></i></button>
                    <div className="control-display"></div>
                    <button className="down"><i class="fa-solid fa-chevron-up fa-rotate-180"></i></button>
                </section>
            </section>
        )
    }
}