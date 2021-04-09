
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

import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from './App';
import {TeliaColorDot} from '@teliads/components/react/commonjs';

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const actions = {
    increment: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    decrement: spy()
  };
  const component = shallow(<TeliaColorDot color="pink" withborder={true} />);
  return {
    component,
    actions,
    buttons: component.find('div'),
  };
}

// --snip--

describe('App Component', () => {
  it('should match exact snapshot', () => {
    const { actions } = setup();
    const counter = (
      <TeliaColorDot color="pink" withborder={true} />
    );
    const tree = renderer.create(counter).toJSON();

    expect(tree).toMatchSnapshot();
  });
});