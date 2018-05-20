import React from 'react';
import { mount } from 'enzyme';
import Card from './Card'
import { MemoryRouter } from 'react-router-dom';
import character from '../../../__mocks__/character.json'

describe('<Card />', () => {
    it('Should render Card', () => {

        //https://github.com/ReactTraining/react-router/issues/5579
        //avoid memory router generating new keys everytime it runs so that snapshot remains the same
        const wrapper = mount(
            <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
                <Card character={character} />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




