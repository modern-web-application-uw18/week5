import React from 'react';
import { mount } from 'enzyme';
import Paginator from './Paginator'
import { MemoryRouter } from 'react-router-dom';
// import character from '../../../__mocks__/character.json'

describe('<Paginator />', () => {
    it('Should render Paginator', () => {

        const wrapper = mount(
            // <MemoryRouter>
                <Paginator />
            // </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




