import React, {useState} from 'react';
import Ingredient from './Ingredient';
import styled from '@emotion/styled';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 20rem;
    margin: 2rem;
    padding: 1rem;
    border-radius: .6rem;
    background-color: #90EE90;
`

const Title = styled.h3`
    position: absolute;
    padding: .5rem;
    top: 1rem;
    left: 1.5rem;
    right: .5rem;
    font-size: 1rem;
    color: #1d1d1d;
`

const Image = styled.img`
    border-radius: .4rem;
    object-fit: cover;
`

const Link = styled.a`
    font-size: 1rem;
    color: #2a5be2;
    border: none;
    padding: .2rem;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

const Show = styled.button`
    font-size: 1rem;
    text-transform: uppercase;
    border: none;
    border-radius: .4rem;
    height: 2rem;
    background-color: coral;
    color: white;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: coral;
        transition: ease-in-out .2s;
    }
`

const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false);
    const {label, image, url, ingredients} = recipe.recipe;

    const onClick = () => {
        setShow(!show);
    }

    return (
        <Card>
            <Title>{label}</Title>
            <Image src={image} alt={label} />
            <Link href={url} target='_blank' rel='noopener noreferrer'>link</Link>
            <Show onClick={onClick}>Ingredients</Show>
            {show && <Ingredient ingredients={ingredients} />}
        </Card>
    );
}

export default Recipe;
