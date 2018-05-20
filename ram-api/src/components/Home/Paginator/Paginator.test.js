import React from 'react';
import { mount } from 'enzyme';
import Paginator from './Paginator'
import { MemoryRouter } from 'react-router-dom';


describe('<Paginator />', () => {
    it('Should render Paginator', () => {

        const wrapper = mount(
            // <MemoryRouter>
                <Paginator />
            // </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })


    it('Should simulate clicks', () => {

        const wrapper = mount(<Paginator paginatorHandler={jest.fn()}/>);
     

        wrapper.find('a').map(a => {
                a.simulate('click')
        })
   

        expect(wrapper).toMatchSnapshot();
    })
})




