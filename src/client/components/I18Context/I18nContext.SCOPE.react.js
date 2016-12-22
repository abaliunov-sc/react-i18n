import React, { Component } from 'react';
import { showroomScopeDecorator } from 'opuscapita-showroom-client';
import 	FormattedMessage from '../FormattedMessage/FormattedMessage.react.js';

window.FormattedMessage = FormattedMessage;

@showroomScopeDecorator
class I18nContextScope extends Component {
  render() {
    return (
      <div>
        {this._renderChildren()}
      </div>
    );
  }
}

export default I18nContextScope;
