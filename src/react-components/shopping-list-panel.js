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
    const { formatMessage } = this.props.intl;

      return (
        <div className={shoppingListPanelStyles.profileEntry}>
            <div className={shoppingListPanelStyles.close}>
              <button autoFocus onClick={() => this.props.onClose()}>
                <i>
                  <FontAwesomeIcon icon={faTimes} />
                </i>
              </button>
              <div className={classNames([shoppingListPanelStyles.box])}>
                <label className={shoppingListPanelStyles.title}>
                  <FormattedMessage id="cart.list" />
                </label>
              </div>
            </div>
            <div class={shoppingListPanelStyles.wrapp}>
              <div><ShoppingItem icon={PurinIcon} name="プリン" price="$150" genre="monster" productStatus="新品" info="カナダシティに出現しがち" /></div>
              <div><ShoppingItem icon={MyuIcon} name="ミュウ"  price="$100000" genre="regend monster" productStatus="新品" info="その姿は幻" /></div>
              <div><ShoppingItem icon={PickachuIcon} name="ピカチュウ" price="$10000" genre="popular monster" productStatus="中古" info="里親募集中"/></div>
            </div>
            <div>
              <input className={shoppingListPanelStyles.formSubmit} type="submit" value={formatMessage({ id: "cart.buy" })} />
            </div>
        </div>
      )
  }
}

export default injectIntl(ShoppingListPanel);