import React from 'react';
import { mount } from 'enzyme';
import Favorites from './Favorites'
// import { MemoryRouter, withRouter, Route} from 'react-router-dom';
import characters from '../../__mocks__/characters.json'

describe('<Favorites />', () => {
    it('Should render Favorites', () => {

        const wrapper = mount(<Favorites characters={characters} />);


        expect(wrapper).toMatchSnapshot();
    })
})