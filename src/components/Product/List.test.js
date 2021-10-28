import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import List from "./List";

it('should render correctly <List>', () => {
    const products = [
        {
            "id": "1",
            "name": "name 1",
            "category": "1",
            "price": 20,
            "description": "description 1"
        },
        {
            "id": "2",
            "name": "name 2",
            "category": "1",
            "price": 50,
            "description": "description 2"
        }
    ]

    const wrapper = renderer.create(<MemoryRouter><List products={products} /></MemoryRouter>).toJSON();
    expect(wrapper).toMatchSnapshot();
});