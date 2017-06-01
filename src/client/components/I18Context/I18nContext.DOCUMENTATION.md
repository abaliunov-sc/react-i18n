### Synopsis

I18Context React component
Use it as a parent component if you need pass [I18nManager](https://github.com/OpusCapita/i18n/blob/master/src/utils/I18nManager.js) to children [context](https://facebook.github.io/react/docs/context.html)
Instance of I18nManager exposes as `context.i18n`

Now it **has no support** of `I18nManager.register()`. It should be implemented soon.

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| locale | string | Any string indentify locale. Examples: 'en', 'de'. It don't follow [BCP 47](https://tools.ietf.org/html/bcp47) or any another standart |
| intlDatas | array | Array of `intlDatas`. Every item has shape `{ locales: [string], messages: object }` |
| formatInfos | object | Example: `{ en: { datePattern: 'MM/dd/yyyy' }, ru: { datePattern: 'dd/MM/yyyy' } }` See description [here](https://github.com/OpusCapitaBES/js-i18n) |
| defaultLocale | string | Fallback. If message not found try to find it at another locale |

### Code Example

```
<I18nContext>
  {/* Your components here
      You have some defaults preconfigured for several locales
      See **defaultProps.js** in sources */}
</I18nContext>

<I18nContext
  locale='en'
  intlDatas={[
    { locales: ['en'], messages: { hi: 'Hello', bye: 'Bye!' }},
    { locales: ['de'], messages: { hi: 'Willkomm', bye: 'Auf Wiedersehen!' }}
  ]}
>
  <FormattedMessage message="hi" />
</I18nContext>

<br />

<I18nContext
  locale='de'
  intlDatas={[
    { locales: ['en'], messages: { hi: 'Hello', bye: 'Bye!' }},
    { locales: ['de'], messages: { hi: 'Willkomm', bye: 'Auf Wiedersehen!' }}
  ]}
>
  <FormattedMessage message="hi" />
</I18nContext>
```

### Component Name

I18nContext

### Tags

I18n
