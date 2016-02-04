import React from 'react';
import ReactDOM from 'react-dom';
import { I18nManager } from 'jcatalog-i18n';
import FormattedMessage from './components/FormattedMessage';

/**
 * Just sample App for i18n usage demonstration.
 *
 * @author Alexander Frolov
 */
class App extends React.Component {

  static propTypes = {
    locale: React.PropTypes.string.isRequired,
  };

  static contextTypes = {
    i18n: React.PropTypes.object.isRequired,
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
          text: 'Text 4',
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

export default function abc(element, props) {
  return ReactDOM.render(<App {...props} locale="en-US"/>, element);
}

abc(document.body, { title: 'Hello World!' });
