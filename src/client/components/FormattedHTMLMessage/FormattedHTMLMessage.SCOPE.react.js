import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import { I18nManager } from '@opuscapita/i18n';

@showroomScopeDecorator
class FormattedHTMLMessageScope extends Component {
  static contextTypes = {
    i18n: PropTypes.object
  }

  static childContextTypes = {
    i18n: PropTypes.object
  }

  getChildContext() {
    let i18n = this.context.i18n;
    if (!this.context.i18n) {
      i18n = new I18nManager('en');
    }

    i18n.register('TextComponent', [{
      locales: ['en'],
      messages: {
        logo: 'Here we go',
      },
    }]);

    return { i18n };
  }

  render() {
    return (<div>{this._renderChildren()}</div>)
  }
}

export default FormattedHTMLMessageScope;
