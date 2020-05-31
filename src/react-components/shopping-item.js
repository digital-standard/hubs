import React, { Component } from "react";


export default class ShoppingItem extends React.Component{
    getImageURL()
    {
        const id = this.props.image;
        const url = "../../assets/images/" + id + ".jpg";
        return url;
    }

    render(){
        const label = this.props.label;
        const icon = this.props.icon;
        //const url = this.getImageURL();
        const boxStyle = {
            border: "1px solid silver",
            margin: "8px",
            padding: "4px"
        }

        return (<div style={boxStyle} width="100%">
            <img src={icon} width="128" />
            <span> {label}</span>
        </div>)
    }
}

