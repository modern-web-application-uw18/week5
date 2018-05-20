import React from 'react';
import { mount } from 'enzyme';
import { Detail } from './Detail'
import { MemoryRouter, withRouter, Route} from 'react-router-dom';
// import character from '../../../__mocks__/character.json'

describe('<Detail />', () => {
    it('Should render Detail', () => {

        //https://stackoverflow.com/questions/48403959/match-property-not-set-on-props-when-using-memoryrouter-in-test?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
        //to get the match.params in the Detail component
        // const RDetail = withRouter(Detail);
        {/* <RDetail /> */}

        //https://github.com/jefflau/jest-fetch-mock/issues/53
        //https://stackoverflow.com/questions/37925098/testing-react-component-withing-react-router?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
        const wrapper = mount(
            <MemoryRouter initialEntries={['/detail/3']} >
                <Route component={props => <Detail {...props} />} path="/detail/:id"/>               
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})