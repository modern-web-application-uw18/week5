import React from 'react';
import { mount } from 'enzyme';
import Home from './Home'
import { MemoryRouter } from 'react-router-dom';
import characters from '../../__mocks__/characters.json'

describe('<Home />', () => {
    it('Should render Home', () => {

        const wrapper = mount(
             <MemoryRouter>
                <Home characters={characters} searchBoxValue=''/>
             </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




