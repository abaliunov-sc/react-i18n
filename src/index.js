import { I18nManager } from 'jcatalog-i18n';
import FormattedMessage from './components/FormattedMessage.jsx';
import FormattedHTMLMessage from './components/FormattedHTMLMessage.jsx';
import packageJson from '../package.json';

export default {
  I18nManager,
  FormattedMessage,
  FormattedHTMLMessage,
  version: packageJson.version,
};
