import React from 'react';
import { mount } from 'enzyme';
import SearchBox from './SearchBox'
// import { MemoryRouter} from 'react-router-dom';
// import characters from '../../__mocks__/characters.json'

describe('<SearchBox />', () => {
    it('Should render SearchBox', () => {

        const wrapper = mount(  <SearchBox searchHandler={jest.fn()} />      );


        expect(wrapper).toMatchSnapshot();
    })
})




