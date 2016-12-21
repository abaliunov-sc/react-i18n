import React from 'react';
import _ from 'underscore';

export default class FormattedMessage extends React.Component {
  static propTypes = {
    message: React.PropTypes.string,
  };

  static contextTypes = {
    i18n: React.PropTypes.object.isRequired,
  };

  render() {
    let message = null;
    if (this.props.message) {
      message = this.context.i18n.getMessage(this.props.message, _.omit(this.props, 'message'));
    }

    return (<span>{message}</span>);
  }
}
