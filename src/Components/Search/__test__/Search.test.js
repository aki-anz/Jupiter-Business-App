import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Search from '../Search';

afterEach(cleanup);

it('Component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('Form renders properly', () => {
    const {getByTestId} = render(<Search />);
    const field = getByTestId('field');
    const btn = getByTestId('btn');
    expect(field).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
})

it('input updates on change', () => {
    const {getByTestId} = render(<Search />);
    const inputField = getByTestId('field');
    fireEvent.change(inputField, {target: {value: 'test item'}});
    expect(inputField.value).toBe('test item');
})

it('Component matches snapshot', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
})

