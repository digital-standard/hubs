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
    onClose: PropTypes.func
  }

  state = {
    cartButtonActive: true,
  };

  cartClicked = link => {
    this.setState({ cartButtonActive: false });
  };

  componentDidMount() {
    // const {async} = this.props;
    // const script = document.createElement("script");

    // script.src = 'https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151476901&style=cloth_blue&name=n&img=y&expl=y&stock=y&price=y&optview=n&inq=y&sk=y';
    // script.type = 'text/javascript';
    // script.charset ='euc-jp';
    // script.async = async || false;

    // document.getElementById('colorScript').replaceWith(script)
     // 1. create iframe to load a library
     var iframe = document.createElement('iframe');
     iframe.style.width = '600px';
     iframe.style.height = '800px';
     iframe.style.backgroundColor = "#FFFFFF";
     var head = document.getElementById('colorScript');
     head.appendChild(iframe);

    // 2. some functions after loading a library 
    iframe.onload = function() {
    }

    // 3. write sctipt tag in iframe
    var html = '<body><script src="https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151476901&style=cloth_blue&name=n&img=y&expl=y&stock=y&price=y&optview=n&inq=y&sk=y"><\/script><\/body>';
    var iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(html);
    iframeDocument.close();
  }

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
        <div id='colorScript'/>
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