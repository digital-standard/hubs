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
          <FormattedMessage id={`product.name${this.props.name ? "_modal" : ""}`} /> {this.props.name};
        </div>
        <div>
          <FormattedMessage id={`product.info${this.props.info ? "_modal" : ""}`} /> {this.props.info};
        </div>
        <div>
          <FormattedMessage id={`product.price${this.props.price ? "_modal" : ""}`} /> {this.props.price + 'yen'};
        </div>
        <div>
          <FormattedMessage id={`product.status${this.props.productStatus ? "_modal" : ""}`} /> {proStatus};
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