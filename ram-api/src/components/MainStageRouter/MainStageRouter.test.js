import React from 'react';
import { mount, shallow} from 'enzyme';
import MainStageRouter from './MainStageRouter'
import { MemoryRouter } from 'react-router-dom';
import characters from '../../__mocks__/characters.json'

describe('<MainStageRouter />', () => {
    it('Should render MainStageRouter', () => {

        const wrapper = shallow(
            <MemoryRouter>
                <MainStageRouter characters={characters} />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




