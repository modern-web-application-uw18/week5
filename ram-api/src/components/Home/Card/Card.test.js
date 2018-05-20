import React from 'react';
import { mount } from 'enzyme';
import Card from './Card'
import { MemoryRouter } from 'react-router-dom';
import character from '../../../__mocks__/character.json'

describe('<Card />', () => {
    it('Should render Card', () => {

        const wrapper = mount(
            <MemoryRouter>
                <Card character={character} />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




