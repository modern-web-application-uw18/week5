import React from 'react';
import { mount } from 'enzyme';
import Header from './Header'
import { MemoryRouter } from 'react-router-dom';


describe('<Header />', () => {
    it('Should render Header', () => {

        //https://github.com/ReactTraining/react-router/issues/5579
        //avoid memory router generating new keys everytime it runs so that snapshot remains the same

        const wrapper = mount(
            <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
                <Header searchHandler={jest.fn()} />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




