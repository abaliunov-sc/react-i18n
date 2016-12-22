import { Component, PropTypes } from 'react';
import I18nManager from 'opuscapita-i18n/lib/utils/I18nManager';
import defaultProps from './defaultProps';

class I18nContext extends Component {
  constructor(props) {
    super(props);
    this.initManager(props);
  }

  getChildContext() {
    let i18n = (this.context && this.context.i18n) || this.i18n;
    return ({ i18n });
  }

  componentWillReceiveProps(nextProps) {
    this.initManager(nextProps);
  }

  initManager(props) {
    let {
      locale,
      intlDatas,
      formatInfos,
      defaultLocale
    } = props;
    this.i18n = new I18nManager(locale, intlDatas, formatInfos, defaultLocale);
  }

  render() {
    return this.props.children || null;
  }
}

I18nContext.contextTypes = {
  i18n: PropTypes.object
};
I18nContext.childContextTypes = {
  i18n: PropTypes.object
};
I18nContext.propTypes = {
  locale: PropTypes.string,
  intlDatas: PropTypes.arrayOf(
    PropTypes.shape({
      locale: PropTypes.string,
      messages: PropTypes.object
    })
  ),
  formatInfos: PropTypes.object,
  defaultLocale: PropTypes.string
};
I18nContext.defaultProps = {
  locale: defaultProps.locale,
  intlDatas: defaultProps.intlDatas,
  formatInfos: defaultProps.formatInfos,
  defaultLocale: defaultProps.defaultLocale
};

export default I18nContext;
