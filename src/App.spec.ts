
/**
 * @jest-environment jsdom-sixteen
 */
 import { shallowMount } from '@vue/test-utils'
 import TeliaButton from '@teliads/components/react'
 
 import { defineCustomElements } from '@teliads/components/loader';
 defineCustomElements(window)
 
 // window.customElements.define('my-component', class MyComponent {})
 
 describe('TeliaButton', () => {
   it('renders props when passed', () => {
     console.log(window.customElements.get('telia-button'))
     const msg = 'new message'
     const wrapper = shallowMount(TeliaButton, {
       propsData: { children: msg, variant: "primary"}
     })
     expect(wrapper.text()).toMatch(msg)
   })
 })