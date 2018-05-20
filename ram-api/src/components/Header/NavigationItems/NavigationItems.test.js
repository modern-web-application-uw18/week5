import React from 'react';
import { mount } from 'enzyme';
import NavigationItems from './NavigationItems'
import { MemoryRouter } from 'react-router-dom';
// import characters from '../../__mocks__/characters.json'

describe('<NavigationItems />', () => {
    it('Should render NavigationItems', () => {

        const wrapper = mount(
            <MemoryRouter>
                <NavigationItems />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




