import React from 'react';
import ReactDOM from 'react-dom';
import { I18nManager } from 'jcatalog-i18n';
import FormattedMessage from './FormattedMessage.jsx';

/**
 * Just sample App for i18n usage demonstration.
 *
 * @author Alexander Frolov
 */
export default class App extends React.Component {

  static propTypes = {
    locale: React.PropTypes.string.isRequired,
  };

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired,
  };

  state = {
    i18n: new I18nManager(this.props.locale),
  };

  getChildContext() {
    const intlData = {
      locales: ['en-US'],
      messages: {
        logo: {
          title: 'Title',
          text: 'Text',
        },
      },
    };

    return {
      i18n: this.state.i18n.register('Header', [intlData]),
    };
  }

  /**
   * Render App
   */
  render() {
    return (
      <header className="header-style">
        <a href="#" className="logo-style" title={this.state.i18n.getMessage('logo.title')}>
          <FormattedMessage message="logo.text"/>
        </a>
      </header>
    );
  }
}
