/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-multi-comp */
import 'jsdom-global/register';
import React, { Component, PropTypes } from 'react';
import I18nContext from '.';
import { I18nManager } from 'opuscapita-i18n';
import { expect } from 'chai';
import { mount, render } from 'enzyme';
import FormattedMessage from '../FormattedMessage/FormattedMessage.react.js';

let instanceOfI18nManager = new I18nManager('en', null);

class ParentWithI18nContext extends Component {
  getChildContext() {
    return ({
      i18n: this.props.i18n
    });
  }

  render() {
    return this.props.children;
  }
}
ParentWithI18nContext.propTypes = {
  i18n: PropTypes.object
};
ParentWithI18nContext.childContextTypes = {
  i18n: PropTypes.object
};

class ChildWantsI18nContext extends Component {
  render() {
    return null;
  }
}
ChildWantsI18nContext.contextTypes = {
  i18n: PropTypes.object
};

describe('I18nContext', () => {
  describe('self context', () => {
    it('has property `i18n`', () => {
      let elementContext = mount(
        <I18nContext></I18nContext>
      ).context();
      expect(elementContext).to.have.property('i18n');
    });

    it('propertry `i18n` is `undefined` if no provided by parent', () => {
      let elementContext = mount(
        <I18nContext></I18nContext>
      ).context();
      expect(typeof elementContext.i18n).to.equal('undefined');
    });

    it('property `i18n` can be provided by parent', () => {
      let parentElement = mount(
        <ParentWithI18nContext i18n={instanceOfI18nManager}>
          <I18nContext></I18nContext>
        </ParentWithI18nContext>
      );
      let elementContext = parentElement.find(I18nContext).nodes[0].context;
      expect(elementContext.i18n).to.deep.equal(instanceOfI18nManager);
    });
  });

  describe('property change should have effect', () => {
    it('`locale`', () => {
      let element = mount(
        <I18nContext
          locale='en'
          intlDatas={[
            { locales: ['en'], messages: { hi: 'Hello', bye: 'Bye!' } },
            { locales: ['de'], messages: { hi: 'Willkomm', bye: 'Auf Wiedersehen!' } }
          ]}
        >
          <FormattedMessage message='hi' />
        </I18nContext>
      );
      expect(element.html().includes('Hello')).to.be.ok;
      element.setProps({ locale: 'de' });
      expect(element.html().includes('Willkomm')).to.be.ok;
    });

    it('`message text`', () => {
      let element = mount(
        <I18nContext
          locale='en'
          intlDatas={[
            { locales: ['en'], messages: { hi: 'Hello', bye: 'Bye!' } }
          ]}
        >
          <FormattedMessage message='hi' />
        </I18nContext>
      );
      expect(element.html().includes('Hello')).to.be.true;
      element.setProps({
        intlDatas: [
          { locales: ['en'], messages: { hi: 'Nice to meet you', bye: 'Bye!' } }
        ]
      });
      expect(element.html().includes('Nice to meet you')).to.be.true;
    });
  });

  describe('child context', () => {
    it('gets `i18n`', () => {
      let element = mount(
        <I18nContext>
          <ChildWantsI18nContext />
        </I18nContext>
      );
      let childElementContext = element.find(ChildWantsI18nContext).nodes[0].context;
      expect(childElementContext.i18n).to.not.be.undefined;
    });
  });

  describe('render', () => {
    it('only <noscript/> DOMElement if no children', () => {
      let element = render(<I18nContext></I18nContext>);
      expect(element.find('*')).to.have.length(1);
      expect(element.find('noscript')).to.have.length(1);
    })

    it('without wrappers', () => {
      let children = (
        <div>
          <div>2</div>
          <div>3</div>
        </div>
      );
      let element = mount(<I18nContext>{children}</I18nContext>);
      expect(element.find('div')).to.have.length(3);
    });
  });
});
