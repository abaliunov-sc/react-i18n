import { I18nManager } from 'jcatalog-i18n';
import FormattedMessage from './app/components/FormattedMessage.jsx';
import FormattedHTMLMessage from './app/components/FormattedHTMLMessage.jsx';
import packageJson from '../package.json';

export default {
  I18nManager,
  FormattedMessage,
  FormattedHTMLMessage,
  version: packageJson.version,
};
