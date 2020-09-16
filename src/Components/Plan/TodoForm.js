import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Button, TextField} from '@material-ui/core';

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: '',
        ingredient: '',
        completed: false
    });
    const handleInputChange = (e) => {
        setTodo({ ...todo, ingredient: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.ingredient.trim()) {
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, ingredient: ''});
        }
    }
    return (
        <>
        <form className='todo-form' onSubmit={handleSubmit}>
            <TextField
            label='Ingredient'
            name='ingredient'
            type='text'
            value={todo.ingredient}
            onChange={handleInputChange}
            />
            <Button style={{margin: 3}} type='submit'>submit</Button>      
        </form>  
        </>
    );
}

export default TodoForm;
