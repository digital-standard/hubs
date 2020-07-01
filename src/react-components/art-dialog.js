import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import configs from "../utils/configs";

import { messages } from "../utils/i18n";
import { WithHoverSound } from "./wrap-with-audio";
import styles from "../assets/stylesheets/art-dialog.scss"; // to think

export default class ArtDialog extends Component {
  static propTypes = {
    isModal: PropTypes.bool,
    name: PropTypes.string,
    info: PropTypes.string,
    pic: PropTypes.string,
    onClose: PropTypes.func
  }

  state = {
    cartButtonActive: true,
  };

  componentDidMount() {
     // 1. create iframe to load a library
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
    // //var html = '<body><script src="https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151476901&style=hemp&name=y&img=y&expl=y&stock=y&price=y&optview=n&inq=n&sk=y"><\/script><\/body>';
    // var html = '<body><script src="' + this.props.scriptSrc + '"><\/script><\/body>';
    // var iframeDocument = iframe.contentWindow.document;
    // iframeDocument.open();
    // iframeDocument.write(html);
    // iframeDocument.close();
  }

  render(){
    return(
      <div id="art_dialog_base" className={classNames({ [styles.dialog]: true, [styles.modal]: this.props.isModal })}>
        {!this.props.isModal && <div className={styles.attachPoint} />}
        <div>
          <FormattedMessage id={`art.name${this.props.name ? "_modal" : ""}`} /> <span id="art_dialog_art_name">{this.props.name}</span>
        </div>
        <div>
          <img id="art_dialog_art_pic" src={this.props.pic} alt="" title="" class="picImage" width="70%"/>
        </div>
        <div>
          <FormattedMessage id={`art.info${this.props.info ? "_modal" : ""}`} /> <span id="art_dialog_art_info">{this.props.info}</span>
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