
import {TeliaButton as TeliaButtonElement} from '@teliads/components/react';
import {TeliaButton} from '@teliads/components/dist/types/components/telia-button/telia-button';
describe('telia-button', () => {

    const AWESOME_BUTTON_TAG = 'telia-button';
    const ELEMENT_ID = 'telia-button';
    let buttonElement: HTMLTeliaButtonElement;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot as ShadowRoot;
    }

    beforeEach(() => {
        buttonElement = window.document.createElement(AWESOME_BUTTON_TAG) as HTMLTeliaButtonElement;
        document.body.appendChild(buttonElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].remove();
    });

    it('displays button text', async () => {
        const dummyText = 'Web components & Jest with Electron';
        buttonElement.setAttribute('children', dummyText);
        await buttonElement.updateComplete;

        const renderedText = getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID)?.innerText;

        expect(renderedText).toEqual(dummyText);
    });
    it('handles clicks', async () => {
        const mockClickFunction = jest.fn();
        buttonElement.addEventListener('click', () => {mockClickFunction()});

        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID)?.click();
        getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID)?.click();

        expect(mockClickFunction).toHaveBeenCalledTimes(2);
    });
});