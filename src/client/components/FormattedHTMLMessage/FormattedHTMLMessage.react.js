import React from 'react';
import lodash from 'lodash';

export default class FormattedHTMLMessage extends React.Component {

  static propTypes = {
    message: React.PropTypes.string,
  };

  static contextTypes = {
    i18n: React.PropTypes.object.isRequired,
  };

  render() {
    let message = null;
    if (this.props.message) {
      message = this.context.i18n.getMessage(this.props.message, lodash.omit(this.props, 'message'));
    }

    return (<span dangerouslySetInnerHTML={ { __html: message } } />);
  }
}
