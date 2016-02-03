import React from 'react';
import ReactDOM from 'react-dom';
import FormattedMessage from './components/FormattedMessage.jsx';
import {I18nManager} from 'jcatalog-i18n';

/**
 * Root tag of custom componet should register own messages.
 *
 * @author Alexander Frolov
 */
class Header extends React.Component {
  static contextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  getChildContext() {
    const intlData = {
      locales : ['en-US'],
      messages: {
          logo: {
              title: 'Title',
              text: 'Text'
          }
      }
    };

    return {
        i18n: this.context.i18n.register('Header', [intlData])
    };
  }

  /**
   * Render header component
   *
   * @returns {XML}
   */
  render() {
    return (
      <header className="header-style">
        <a href="#" className="logo-style" title={this.context.i18n.getMessage('logo.title')}>
          <FormattedMessage message="logo.text" />
        </a>
      </header>
    );
  }
}

/**
 * Just sample App for i18n usage demonstration.
 *
 * @author Alexander Frolov
 */
class App extends React.Component {
  static propTypes = {
    locale: React.PropTypes.string.isRequired
  };

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return {
        i18n: new I18nManager(this.props.locale)
    };
  }

  /**
   * Render App
   */
  render() {
    return (

      <div>
        <Header />
      </div>

      );
  }
}

export default function(element, props) {
  return ReactDOM.render(<App {...props} locale="en-US" />, element);
};
