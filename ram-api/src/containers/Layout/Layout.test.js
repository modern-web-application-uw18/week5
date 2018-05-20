import React from 'react';
import { mount, shallow} from 'enzyme';
import Layout from './Layout'
import { MemoryRouter } from 'react-router-dom';
import characters from '../../__mocks__/characters.json'

describe('<Layout />', () => {
    it('Should render Layout', () => {

        const wrapper = shallow(
            // <MemoryRouter>
                <Layout />
            // </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




