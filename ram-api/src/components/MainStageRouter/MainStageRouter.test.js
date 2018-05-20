import React from 'react';
import { mount, shallow } from 'enzyme';
import MainStageRouter from './MainStageRouter'
import { MemoryRouter } from 'react-router-dom';
import characters from '../../__mocks__/characters.json'

describe('<MainStageRouter />', () => {
    it('Should render MainStageRouter', () => {

        //https://github.com/ReactTraining/react-router/issues/5579
        //avoid memory router generating new keys everytime it runs so that snapshot remains the same
        const wrapper = shallow(
            <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
                <MainStageRouter characters={characters} />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




