import React, { Component } from "react";
import shoppingListPanelStyles from "../assets/stylesheets/shopping-list-panel.scss";

export default class ShoppingItem extends React.Component{
    getImageURL()
    {
        const id = this.props.image;
        const url = "../../assets/images/" + id + ".jpg";
        return url;
    }

    render(){
        const name = this.props.name;
        const icon = this.props.icon;
        const price = this.props.price;
        const info = this.props.info;
        const genre = this.props.genre;
        const productStates = this.props.productStates;

        //const url = this.getImageURL();
        const boxStyle = {
            border: "1px solid silver",
            margin: "8px",
            padding: "4px"
        }

        return (
        <div style={boxStyle} width="100%">
            <img src={icon} width="128" />
            <div className={shoppingListPanelStyles.shoppingText}>
              <div>{name}</div>
              <div>{price}</div>
              <div>{genre}</div>
              <div>{productStates}</div>
              <div>{info}</div>
            </div>
        </div>)
    }
}

