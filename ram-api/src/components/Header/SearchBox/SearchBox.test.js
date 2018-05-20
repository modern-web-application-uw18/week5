import React from 'react';
import { mount } from 'enzyme';
import SearchBox from './SearchBox'

describe('<SearchBox />', () => {
    it('Should render SearchBox', () => {

        const wrapper = mount(  <SearchBox searchHandler={jest.fn()} />      );


        expect(wrapper).toMatchSnapshot();
    })


    it('Should simulate onchange event', () => {

        const wrapper = mount(  <SearchBox searchHandler={jest.fn()} />      );


        wrapper.find('.form-control').simulate('change');
        expect(wrapper).toMatchSnapshot();
    })



    it('Should simulate componentWillUnmount', () => {

        const wrapper = mount(  <SearchBox searchHandler={jest.fn()} />      );


        wrapper.unmount();

        expect(wrapper).toMatchSnapshot();
    })


})




