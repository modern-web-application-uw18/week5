import React from 'react';
import ReactDOM from 'react-dom';
import Character from './character';
import TestRenderer from 'react-test-renderer'

 describe('Character', () => {
it('Smoke test make sure the component renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Character />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Should render with a list of characters and buttons', () => {
    const component = TestRenderer.create(<Character />);
    expect(component.toJSON()).toMatchSnapShot();
})
}); 