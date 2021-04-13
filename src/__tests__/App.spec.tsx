
// import {TeliaButton as TeliaButtonElement} from '@teliads/components/react';
// import {TeliaButton} from '@teliads/components/dist/types/components/telia-button/telia-button';
// describe('telia-button', () => {

//     const AWESOME_BUTTON_TAG = 'telia-button';
//     const ELEMENT_ID = 'telia-button';
//     let buttonElement: HTMLTeliaButtonElement ;

//     const getShadowRoot = (tagName: string): ShadowRoot => {
//         return document.body.getElementsByTagName(tagName)[0].shadowRoot as ShadowRoot;
//     }

//     beforeEach(() => {
//         buttonElement = window.document.createElement(AWESOME_BUTTON_TAG) as HTMLTeliaButtonElement;
//         document.body.appendChild(buttonElement);
//         console.log(document.body.)
//     });

//     afterEach(() => {
//        document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].remove();
//     });

//     it('displays button text', async () => {
//         const dummyText = 'Web components & Jest with Electron';
//         buttonElement.setAttribute('children', dummyText);
//         await buttonElement.componentOnReady;

//         const renderedText = getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID)?.innerText;

//         expect(renderedText).toEqual(dummyText);
//     });
//     it('handles clicks', async () => {
//         const mockClickFunction = jest.fn();
//         buttonElement.addEventListener('click', () => {mockClickFunction()});

//         getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID)?.click();
//         getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID)?.click();

//         expect(mockClickFunction).toHaveBeenCalledTimes(2);
//     });
// });

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TeliaColorDot, TeliaButton} from '@teliads/components/react';

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const TeliaColorDotComponent = shallow(<TeliaColorDot color="pink" withborder={true} dateTestid="colordot-1" />);
  const TeliaButtonComponent = shallow(<TeliaButton variant="primary" dataTestid="button-1">Click me</TeliaButton>);
  return {
    TeliaColorDotComponent,
    TeliaButtonComponent
  }
}

describe('TeliaColorDot Component', () => {
  it('should render with props', () => {
    const propsObject = {"color": "pink", "dateTestid": "colordot-1", "forwardedRef": null, "withborder": true};
    const component = setup();
    expect(component.TeliaColorDotComponent.getElement().props).toMatchObject(propsObject);
  });
});

describe('TeliaButton Component', () => {
  it('should render with props', () => {
    const propsObject = {"variant": "primary", "dataTestid": "button-1", "forwardedRef": null};
    const component = setup();
    expect(component.TeliaButtonComponent.getElement().props).toMatchObject(propsObject);
  });
});