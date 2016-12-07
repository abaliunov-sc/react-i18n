# OpusCapita React Intl

This is an extension for [React Intl](https://github.com/yahoo/react-intl) component.

## Assumptions

Everything is stored in _i18n_ (instanse of IntlManager) object in scope of React context.

## Usage

### App

React application should initialize _i18n_ object and propagate it for child components.

```javascript
/**
 * App
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
        i18n: new IntlManager(this.props.locale)
    };
  }

  render() {
    return (

      <div>
        <MyComponent />
      </div>

      );
  }
}

export default function(element, props) {
  return React.render(<App {...props} locale="en-US" />, element);
};
```

### Component

Each component may register own messages in global _i18n_ using _register_ method of IntlManager.

```javascript

/**
 * Root element of custom component.
 */
class MyComponent extends React.Component {
  static contextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  static childContextTypes = {
    i18n: React.PropTypes.object.isRequired
  };

  getChildContext() {
    const intlData = [{
      locales : ['en-US'],
      messages: {
          logo: {
              title: 'Title',
              text: 'Text'
          }
      }
    }];

    return {
        i18n: this.context.i18n.register('MyComponent', intlData)
    };
  }

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

```

## Development

### Tests

```bash
npm test
```

### Demo

```bash
npm start
```
