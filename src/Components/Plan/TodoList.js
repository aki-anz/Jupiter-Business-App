import React from 'react';
import Todo from './Todo';
import {List} from '@material-ui/core';

const TodoList = ({todos, toggleComplete, removeTodoItem}) => {
    return (
        <List>
            {todos.map(todo => (
                <Todo key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                removeTodoItem={removeTodoItem}
                />
            ))}
        </List>
    );
}

export default TodoList;
