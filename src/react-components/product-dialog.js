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
     // 1. create iframe to load a library
    //  const script = document.createElement("script");
    //  script.src = "https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151476901&style=hemp&name=y&img=y&expl=y&stock=y&price=y&optview=n&inq=n&sk=y";
    //  script.async = true;

    //  document.getElementById('colorScript').replaceWith(script)


    //  var iframe = document.createElement('iframe');
    //  var productDialogBase = document.getElementById('product_dialog_base');
    //  iframe.style.width = String(productDialogBase.clientWidth * 0.9) + 'px';
    //  iframe.style.height = String(document.documentElement.clientHeight * 0.7) + 'px';
    //  iframe.style.backgroundColor = "#FFFFFF";
    //  var head = document.getElementById('colorScript');
    //  head.appendChild(iframe);

    // // 2. some functions after loading a library 
    // iframe.onload = function() {
    // }

    // // 3. write sctipt tag in iframe
    // var html = '<body><script src="https://digirooms.thebase.in/items/30108647/widget/large"><\/script><\/body>';
    // var iframeDocument = iframe.contentWindow.document;
    // iframeDocument.open();
    // iframeDocument.write(html);
    // iframeDocument.close();
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
      <div id="product_dialog_base" className={classNames({ [styles.dialog]: true, [styles.modal]: this.props.isModal })}>
        {!this.props.isModal && <div className={styles.attachPoint} />}
        {/*<div id='colorScript' /> */}
        <form action="https://digi-rooms.easy-myshop.jp/c-cart-prev?fic=A000000001" method="POST"  accept-charset="UTF-8">
          <input type="hidden" name="item_code" value="A000000001" /><input type="hidden" name="dummy" value="&amp;#65533;" />
            数量:
            <select name="item_count">
              <option value="1">1</option>
            </select>
          <input type="submit" value="カートに入れる" />
        </form>
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