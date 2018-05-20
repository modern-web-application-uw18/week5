import React from 'react';
import { mount } from 'enzyme';
import Header from './Header'
import { MemoryRouter} from 'react-router-dom';
// import characters from '../../__mocks__/characters.json'

describe('<Header />', () => {
    it('Should render Header', () => {

        const wrapper = mount(
            <MemoryRouter> 
                <Header searchHandler={jest.fn()} />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




