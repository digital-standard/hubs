import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import classNames from "classnames";
import StateLink from "./state-link.js";
import rootStyles from "../assets/stylesheets/ui-root.scss";
import objectListStyles from "../assets/stylesheets/object-list-styles.scss";
import styles from "../assets/stylesheets/presence-list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons/faCubes";
import { faCube } from "@fortawesome/free-solid-svg-icons/faCube";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons/faNewspaper";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { WithHoverSound } from "./wrap-with-audio";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import {
  SORT_ORDER_VIDEO,
  SORT_ORDER_AUDIO,
  SORT_ORDER_IMAGE,
  SORT_ORDER_PDF,
  SORT_ORDER_MODEL,
  SORT_ORDER_UNIDENTIFIED,
  mediaSortOrder,
  mediaSort
} from "../utils/media-sorting.js";

const THUMBNAIL_TITLE = new Map([
  [SORT_ORDER_VIDEO, "Video"],
  [SORT_ORDER_AUDIO, "Audio"],
  [SORT_ORDER_IMAGE, "Image"],
  [SORT_ORDER_PDF, "PDF"],
  [SORT_ORDER_UNIDENTIFIED, "Unknown Media Type"],
  [SORT_ORDER_MODEL, "Model"]
]);

const DISPLAY_IMAGE = new Map([
  [SORT_ORDER_VIDEO, faVideo],
  [SORT_ORDER_AUDIO, faMusic],
  [SORT_ORDER_IMAGE, faImage],
  [SORT_ORDER_PDF, faNewspaper],
  [SORT_ORDER_UNIDENTIFIED, faQuestion],
  [SORT_ORDER_MODEL, faCube]
]);

export default class ShoppingList extends Component {
  static propTypes = {
    history: PropTypes.object,
    sessionId: PropTypes.string,
    onExpand: PropTypes.func,
    scene: PropTypes.object,
    expanded: PropTypes.bool
  };
  
  state = {
    shoppingEntities: []
  };
  
  componentDidMount() {
    document.querySelector(".a-canvas").addEventListener("mouseup", () => {
      if (this.props.expanded) {
        this.props.onExpand(false, true);
      }
    });
    // how to code bellow depends on what kind of shopping asp do you use
    this.updateShoppingEntities = this.updateShoppingEntities.bind(this);
    this.updateShoppingEntities();
    // this.props.scene.addEventListener("listed_shopping_changed", () => setTimeout(() => this.updateShoppingEntities(), 0));
      // HACK: The listed-media component exists before the media-loader component does, in cases where an entity is created from a network template because of an incoming message, so don't updateMediaEntities right away.
      // Sorry in advance for the day this comment is out of date.
    }
  
    updateShoppingEntities() {
      //const shoppingEntities = [...this.props.scene.systems["listed-media"].els];
      //shoppingEntities.sort(mediaSort);
      const shoppingEntities = [
        [1, 'ピカチュウ'],
        [2, 'ライチュウ'],
        [3, 'ヒトカゲ'],
      ];
      this.setState({ shoppingEntities });
    }
  
    componentDidUpdate() {}
  
    domForEntity(el, i) {
      return (
        <WithHoverSound key={this.props.sessionId}>
        <div className={styles.row}>
          <div
            className={classNames({
              [styles.listItem]: true
            })}
          >
          <StateLink className={styles.self} stateKey="overlay" stateValue="shopping" history={this.props.history}>
            <i>{this.state.shoppingEntities[i][1]}</i>
          </StateLink>
        </div>
        </div>
        </WithHoverSound>
      )
    }
  
    renderExpandedList() {
      return (
        <div className={rootStyles.objectList}>
          <div className={objectListStyles.contents}>
            <div className={styles.rows}>
              {this.state.shoppingEntities.length ? (
                this.state.shoppingEntities.map(this.domForEntity.bind(this))
              ) : (
                <FormattedMessage id="shopping-info.no-shopping" className={styles.listItem} />
              )}
            </div>
          </div>
        </div>
      );
    }
  
    render() {
      const numObjects = (this.state.shoppingEntities && this.state.shoppingEntities.length) || 0;
      return (
        <div>
          <button
            title="shopping"
            aria-label={`Toggle list of ${numObjects} object${numObjects === 1 ? "" : "s"}`}
            onClick={() => {
              {/* this.props.onExpand(!this.props.expanded, !AFRAME.utils.device.isMobileVR()); */}
              this.props.onExpand(!this.props.expanded);
            }}
            className={classNames({
              [rootStyles.shoppingListButton]: true,
              [rootStyles.presenceInfoSelected]: this.props.expanded
            })}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            <span className={rootStyles.mediaCount}>{this.state.shoppingEntities.length}</span>
          </button>
          {this.props.expanded && this.renderExpandedList()}
          <button 
            title="shopping-confirm"
            onClick={() => {
              // move to confirmation monitor
            }}
            className={classNames({
              [rootStyles.objectListButton]: true,
              [rootStyles.presenceInfoSelected]: this.props.expanded
            })}
            >
          </button>
        </div>
      );
    }
  }
  

 