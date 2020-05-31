import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, FormattedMessage } from "react-intl";
import ShoppingItem from "./shopping-item";
import PurinIcon from "../assets/images/purin.jpg";
import MyuIcon from "../assets/images/myu.jpg";
import PickachuIcon from "../assets/images/mig.jpg";
import shoppingListPanelStyles from "../assets/stylesheets/shopping-list-panel.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import classNames from "classnames";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import configs from "../utils/configs";
import IfFeature from "./if-feature";
import { SCHEMA } from "../storage/store";
import styles from "../assets/stylesheets/profile.scss";
import { fetchAvatar } from "../utils/avatar-utils";
import { handleTextFieldFocus, handleTextFieldBlur } from "../utils/focus-utils";
import { replaceHistoryState } from "../utils/history";
import StateLink from "./state-link";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";

class ShoppingListPanel extends Component{
  static propTypes = {
    displayNameOverride: PropTypes.string,
    store: PropTypes.object,
    messages: PropTypes.object, // ??
    finished: PropTypes.func,
    intl: PropTypes.object, // ??
    history: PropTypes.object,
    onClose: PropTypes.func
  }

  state = {
    sessionId: null,
    displayName: null
  };

  constructor(props) {
    super(props);
    //this.state = this.getStateFromProfile();
    if (props.sessionId) {
      this.state.sessionId = props.sessionId;
    }
    this.props.store.addEventListener("statechanged", this.storeUpdated);
    this.scene = document.querySelector("a-scene");
  }

  render() {
      return (
        <div className={styles.profileEntry}>
            <div className={styles.close}>
            <button autoFocus onClick={() => this.props.onClose()}>
                <i>
                    <FontAwesomeIcon icon={faTimes} />
                </i>
            </button>
        </div>
            <div class={shoppingListPanelStyles.wrapp}>
                <div><ShoppingItem icon={PurinIcon} label="プリン" /></div>
                <div><ShoppingItem icon={MyuIcon} label="ミュウ" /></div>
                <div><ShoppingItem icon={PickachuIcon} label="ピカチュウ" /></div>
            </div>  
        </div>
      )
  }
}

export default injectIntl(ShoppingListPanel);