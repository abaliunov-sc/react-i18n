import React from 'react';
import {
  FormattedMessage,
  FormattedHTMLMessage
} from 'react-intl';

function connectToIntl(Component) {
  class IntlConnection extends React.Component {
    static contextTypes = {
      i18n: React.PropTypes.object.isRequired
    };

    render() {
      const message = this.props.message ? this.context.i18n.getMessage(this.props.message) : null;

      return (
        <Component {...this.props} message={message} />
      );
    }

  }

  return IntlConnection;
}

export default {
  FormattedMessage: connectToIntl(FormattedMessage),
  FormattedHTMLMessage: connectToIntl(FormattedHTMLMessage)
};
