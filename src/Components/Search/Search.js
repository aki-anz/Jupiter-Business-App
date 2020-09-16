import React, {useState} from 'react';
import './Search.css';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Recipe from './Recipe';
import Warn from './Warn';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Form = styled.form`
    position: relative;
    width: 30rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    margin-bottom: .5rem;
`
const Field = styled.input`
    font-size: .8rem;
    border: none;
    margin: .8rem;
    border-radius: .4rem;
    height: 2.5rem;
    padding: 0.5rem;
    width: 35%;
    &:focus {
        outline: none;
    }
`
const Submit = styled.input`
    width: 10%;
    height: 2rem;
    text-transform: uppercase;
    align-items: center;
    border: none;
    font-size: 1rem;
    border-radius: .4rem;
    background-color: #2a5be2;
    color: white;
    &:hover {
        cursor: pointer;
    }
`
const Recipes = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`

const Search = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [warn, setWarn] = useState('');
   
    const APP_ID = 'a0e4f85b';
    const APP_KEYS = '63ef50148e6cd39b105692645017dc95';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`;

    const getData = async() => {
        if (query !== '') {
        const result = await Axios.get(url);
        setRecipes(result.data.hits);
        setQuery('');
        setWarn('');
    } else {
        setWarn('Search field is empty!');
    }
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                {warn !== '' && <Warn warn={warn} />}
                <Field
                type='text'
                name='query'
                onChange={onChange}
                value={query}
                placeholder='Enter Search Item...'
                data-testid='field'
                />
                <Submit type='submit' value='Go' data-testid='btn' />
            </Form>
            <Recipes>
            {
                recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)
            }
            </Recipes>
        </Container>
    );
}

export default Search;
