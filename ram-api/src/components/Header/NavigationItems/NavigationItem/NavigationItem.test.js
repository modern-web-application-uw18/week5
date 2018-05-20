import React from 'react';
import { mount } from 'enzyme';
import NavigationItem from './NavigationItem'
import { MemoryRouter} from 'react-router-dom';
// import characters from '../../__mocks__/characters.json'

describe('<NavigationItem />', () => {
    it('Should render NavigationItem', () => {

        const wrapper = mount(
            <MemoryRouter> 
                <NavigationItem link="/detail" />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




