import React from 'react';
import {Checkbox, IconButton, ListItem, Typography} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Todo = ({todo, toggleComplete, removeTodoItem}) => {
    const handleToggleClick = () => {
        toggleComplete(todo.id);
    }
    const handleRemoveItem = () => {
        removeTodoItem(todo.id);
    }
    return (
        <ListItem style={{display: 'flex'}}>
            <Checkbox
            type='checkbox'
            checked={todo.completed}
            onClick={handleToggleClick}
            />
            <Typography
                variant='body1'
                style={{
                    textDecoration: todo.completed ? 'line-through' : null,
                    textAlign: 'center'
                }}     
                data-testid='typography'       
            >
                {todo.ingredient}
            </Typography>
            <IconButton onClick={handleRemoveItem} data-testid='iconBtn'>
                <CloseIcon />
                </IconButton>
        </ListItem>
    );
}

export default Todo;
