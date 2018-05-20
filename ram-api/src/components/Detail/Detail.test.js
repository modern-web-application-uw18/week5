import React from 'react';
import { mount } from 'enzyme';
import { Detail } from './Detail'
import { MemoryRouter, withRouter, Route } from 'react-router-dom';

describe('<Detail />', () => {
    it('Should render Detail', () => {

        //https://stackoverflow.com/questions/48403959/match-property-not-set-on-props-when-using-memoryrouter-in-test?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
        //to get the match.params in the Detail component
        // const RDetail = withRouter(Detail);
        {/* <RDetail /> */ }

        //https://github.com/jefflau/jest-fetch-mock/issues/53
        //https://stackoverflow.com/questions/37925098/testing-react-component-withing-react-router?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

        //https://github.com/ReactTraining/react-router/issues/5579
        //avoid memory router generating new keys everytime it runs so that snapshot remains the same
        const wrapper = mount(
            <MemoryRouter initialEntries={[ { pathname: '/detail/3', key: 'testKey' }]} >
                <Route component={props => <Detail {...props} />} path="/detail/:id" />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})