import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { I18nManager } from 'jcatalog-i18n';
import FormattedMessage from './FormattedMessage';

class TestComponent extends React.Component {

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired,
  };

  getChildContext() {
    const intlData = {
      locales: ['en-US'],
      messages: {
        logo: {
          title: 'TestTitle',
          text: 'TestText',
        },
      },
    };
    const i18n = new I18nManager('en-US');

    return {
      i18n: i18n.register('TextComponent', [intlData]),
    };
  }

  render() {
    return (
      <FormattedMessage locale="en-US" message="logo.text" />
    );
  }
}

describe('FormattedMessage', () => {
  it('should translate message', () => {
    const component = TestUtils.renderIntoDocument(<TestComponent />);

    assert.equal('TestText', ReactDOM.findDOMNode(component).innerHTML);
  });
});
