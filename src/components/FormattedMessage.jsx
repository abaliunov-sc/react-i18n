import React from 'react';
import _ from 'underscore';

export default class FormattedMessage extends React.Component {
  static contextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  render() {
    const message = this.props.message ? this.context.i18n.getMessage(this.props.message, _.omit(this.props, "message")) : null;

    return (
      <span>
        {message}
      </span>
    );
  }
}
