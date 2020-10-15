import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
  it('should add numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('1')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('4')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
  it ('should subtract numbers', () =>{
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('7')
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick('4')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
  it ('should divide numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('21')
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick('7')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
  it ('should multiply numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('3')
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick('5')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
  it ('should concatenate numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal= ""
    wrapper.vm.numberClick('7')
    wrapper.vm.numberClick('7')
    expect(wrapper.vm.runningTotal).to.equal(77)
  })
  it('should chain multiple operations together', () =>{
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 0
    wrapper.vm.numberClick('6')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('8')
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(7)

  })

  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(4)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick('6')
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(4)
  })
})
