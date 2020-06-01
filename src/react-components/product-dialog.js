import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import configs from "../utils/configs";

import { messages } from "../utils/i18n";
import { WithHoverSound } from "./wrap-with-audio";
import styles from "../assets/stylesheets/product-dialog.scss";

export default class ProductDialog extends Component {
  static propTypes = {
    isModal: PropTypes.bool,
    id: PropTypes.number,
    onSale: PropTypes.bool,
    name: PropTypes.string,
    info: PropTypes.string,
    photoPath: PropTypes.string,
    price: PropTypes.number,
    genre: PropTypes.string,
    review: PropTypes.number,
    productStatus: PropTypes.number,
    onClose: PropTypes.func
  }

  state = {
    cartButtonActive: true,
  };

  cartClicked = link => {
    this.setState({ cartButtonActive: false });
  };

  render(){
    let proStatus = "";
    if(this.props.productStatus === 1)
    {
      proStatus = "新品";
    }
    else{
      proStatus = "中古";
    }

    return(
      <div className={classNames({ [styles.dialog]: true, [styles.modal]: this.props.isModal })}>
        {!this.props.isModal && <div className={styles.attachPoint} />}
        <div>
          <span id="product_dialog_product_id">{this.props.id};</span>
        </div>
        <div>
          <FormattedMessage id={`product.name${this.props.name ? "_modal" : ""}`} /> <span id="product_dialog_product_name">{this.props.name};</span>
        </div>
        <div>
            <img id="product_dialog_product_pic" src={this.props.photoPath} alt="" title="" />
        </div>
        <div>
          <FormattedMessage id={`product.info${this.props.info ? "_modal" : ""}`} /> <span id="product_dialog_product_info">{this.props.info};</span>
        </div>
        <div>
          <FormattedMessage id={`product.price${this.props.price ? "_modal" : ""}`} /> <span id="product_dialog_product_price">{this.props.price + 'yen'};</span>
        </div>
        <div>
          <FormattedMessage id={`product.status${this.props.productStatus ? "_modal" : ""}`} /><span id="product_dialog_product_status">{proStatus};</span>
        </div>
        <div className={styles.buttons}>
          <WithHoverSound>
            <button className={styles.linkButton} onClick={this.cartClicked.bind(this)}>
    <span>{this.state.cartButtonActive ? <FormattedMessage id={`product.take_it_in_cart`} /> : <FormattedMessage id={`product.taken_in_cart`} /> } </span>
            </button>
          </WithHoverSound>
        </div>
        <WithHoverSound>
          <button className={styles.close} onClick={() => this.props.onClose()}>
            <i>
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </button>
        </WithHoverSound>
      </div>
    )
  }
}