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
    price: PropTypes.number,
    genre: PropTypes.string,
    review: PropTypes.number,
    productStatus: PropTypes.number,
    scriptSrc: PropTypes.string,
    onClose: PropTypes.func
  }

  state = {
    cartButtonActive: true,
  };

  cartClicked = link => {
    this.setState({ cartButtonActive: false });
  };

  componentDidMount() {
     // 1. create iframe to load a library
     var iframe = document.createElement('iframe');
     var productDialogBase = document.getElementById('product_dialog_base');
     iframe.style.width = String(productDialogBase.clientWidth * 0.9) + 'px';
     iframe.style.height = String(document.documentElement.clientHeight * 0.7) + 'px';
     iframe.style.backgroundColor = "#FFFFFF";
     if(this.props.genre == "tokutei")
     {
       iframe.src = this.props.scriptSrc;
     }
     
     var head = document.getElementById('colorScript');
     head.appendChild(iframe);

    // 2. some functions after loading a library 
    iframe.onload = function() {
    }

    // 3. write sctipt tag in iframe
    if(this.props.genre != "tokutei")
    {
      var html = '<body><script src="' + this.props.scriptSrc + '"><\/script><\/body>';
      var iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(html);
      iframeDocument.close();
    }
  }

  render(){
    return(
      <div id="product_dialog_base" className={classNames({ [styles.dialog]: true, [styles.modal]: this.props.isModal })}>
        {!this.props.isModal && <div className={styles.attachPoint} />}
        {this.props.genre != "tokutei" && (
          <div>
            <FormattedMessage id={`product.name${this.props.name ? "_modal" : ""}`} /> <span id="product_dialog_product_name">{this.props.name};</span>
          </div>
        )}
        <div id='colorScript' />
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