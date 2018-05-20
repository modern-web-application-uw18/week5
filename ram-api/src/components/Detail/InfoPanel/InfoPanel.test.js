import React from 'react';
import { mount } from 'enzyme';
import InfoPanel from './InfoPanel';
import character from '../../../__mocks__/character.json'

describe('<InfoPanel />', () => {
    it('Should render InfoPanel', () => {
        const wrapper = mount(<InfoPanel character={character} />);      
        expect(wrapper).toMatchSnapshot();
    })
})