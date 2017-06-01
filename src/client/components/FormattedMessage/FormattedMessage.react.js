import React from 'react';

export default class FormattedMessage extends React.Component {
  static propTypes = {
    message: React.PropTypes.string,
  };

  static contextTypes = {
    i18n: React.PropTypes.object.isRequired,
  };

  render() {
    let text = null;
    if (this.props.message) {
      const { message, ...restProps } = this.props;
      text = this.context.i18n.getMessage(message, restProps);
    }

    return (<span>{text}</span>);
  }
}
