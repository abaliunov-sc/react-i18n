import React from 'react';
import _ from 'underscore';

export default class FormattedHTMLMessage extends React.Component {
  static contextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  render() {
    const message = this.props.message ? this.context.i18n.getMessage(this.props.message, _.omit(this.props, "message")) : null;

    return React.DOM["span"]({
        dangerouslySetInnerHTML: {
            __html: message
        }
    });
  }
}
