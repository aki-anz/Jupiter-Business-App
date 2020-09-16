import React from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from '@emotion/styled';

const List = styled.ul`
    margin-top: 1rem;
    text-decoration: none;
    list-style-type: none;
    border-radius: .6rem;
    background-color: #90EE90;
    padding: .3rem;
    margin: .3rem;
    color: #663300;
`

const Text = styled.li`
    font-size: 1rem;
`

const Ingredient = ({ingredients}) => {
    return ingredients.map(ingredient => {
    return (
        <List key={uuidv4()}>
            <Text className='ingredient-text'>{ingredient.text}</Text>
        </List>
    );
    });
}

export default Ingredient;
