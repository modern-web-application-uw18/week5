import React from 'react';
import { mount } from 'enzyme';
import Home from './Home'
import { MemoryRouter } from 'react-router-dom';
import characters from '../../__mocks__/characters.json'

describe('<Home />', () => {
    it('Should render Home', () => {


        //https://github.com/ReactTraining/react-router/issues/5579
        //avoid memory router generating new keys everytime it runs so that snapshot remains the same
        const wrapper = mount(
            <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
                <Home characters={characters} searchBoxValue='' />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




