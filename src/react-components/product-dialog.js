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
        isNew: PropTypes.bool
    }

    render(){

        return(
            <div className={classNames({ [styles.dialog]: true, [styles.modal]: this.props.isModal })}>
                {!this.props.isModal && <div className={styles.attachPoint} />}
            <div>
                <FormattedMessage id={`invite.or_visit${this.props.isModal ? "_modal" : ""}`} />
            </div>
            <div className={styles.domain}>
                <input type="text" readOnly onFocus={e => e.target.select()} value={name} />
            </div>
            <div className={styles.domain}>
                <input type="text" readOnly onFocus={e => e.target.select()} value={info} />
            </div>
            <div className={styles.domain}>
                <input type="text" readOnly onFocus={e => e.target.select()} value={price} />
            </div>
 

        <div className={styles.buttons}>
          <WithHoverSound>
            <button className={styles.linkButton} onClick={this.copyClicked.bind(this, shortLink)}>
              <span>{this.state.copyButtonActive ? "copied!" : "copy"}</span>
            </button>
          </WithHoverSound>
          {this.props.allowShare &&
            canShare() && (
              <WithHoverSound>
                <button className={styles.linkButton} onClick={this.shareClicked.bind(this, shortLink)}>
                  <span>{this.state.shareButtonActive ? "sharing..." : "share"}</span>
                </button>
              </WithHoverSound>
            )}
          {this.props.allowShare &&
            !canShare() && (
              <WithHoverSound>
                <button className={styles.linkButton} onClick={this.shareClicked.bind(this, shortLink)}>
                  <FormattedMessage id="invite.tweet" />
                </button>
              </WithHoverSound>
            )}
        </div>
        <WithHoverSound>
          <button className={styles.close} onClick={() => this.props.onClose()}>
            <i>
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </button>
        </WithHoverSound>
        <div className={styles.linkCode}>
          <FormattedMessage id={`invite.enter_via${this.props.isModal ? "_modal" : ""}`} />
          <a
            href={`https://${configs.SHORTLINK_DOMAIN}`}
            target="_blank"
            className={styles.hubLinkLink}
            rel="noopener noreferrer"
          >
            {configs.SHORTLINK_DOMAIN}
          </a>
          {/* <div className={styles.linkcode}> */}
          <FormattedMessage id="invite.and_enter_code" />
          {/* </div> */}
        </div>
        <div className={styles.code}>
          {entryCodeString.split("").map((d, i) => (
            <div className={classNames({ [styles.digit]: true, [styles[`digit_${i}`]]: true })} key={`link_code_${i}`}>
              {d}
            </div>
          ))}
        </div>
        <div className={styles.codeDuration}>
          <FormattedMessage id="invite.duration_of_code" />
        </div>
        {embedUrl && (
          <div className={styles.embed}>
            <div>
              <FormattedMessage id={`invite.embed`} />
            </div>
            <div className={styles.embedText}>
              <input
                type="text"
                readOnly
                onFocus={e => {
                  e.target.select();
                  this.setState({ showEmbedTip: true });
                }}
                onBlur={() => this.setState({ showEmbedTip: false })}
                value={embedText}
              />
            </div>
            {this.state.showEmbedTip && (
              <div className={styles.embedTipWrap}>
                <div className={styles.embedTip}>
                  <div className={styles.embedTipAttachPoint} />
                  <FormattedMessage id="invite.embed-tip" />
                </div>
              </div>
            )}
          </div>
        )}
        {this.props.hasPush && (
          <div className={styles.subscribe}>
            <input
              id="subscribe"
              type="checkbox"
              onChange={() => this.props.onSubscribeChanged()}
              checked={this.props.isSubscribed}
            />
            <label htmlFor="subscribe">
              <FormattedMessage id="entry.notify_me" />
            </label>
          </div>
        )}

        {this.props.isModal && (
          <button className={styles.enterVrButton} onClick={() => this.props.onClose()}>
            <FormattedMessage id="entry.return-to-vr" />
          </button>
        )}
      </div>
        )
    }

}