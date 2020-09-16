import React, {useState, useEffect} from 'react';
import './Plan.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = 'todo-list-todos';

const Plan = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);
    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }
    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
            })
        );
    }
    const removeTodoItem = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return (
        <div className='container'>
            <Typography style={{padding: 5}} variant='h4'>
                Shopping List
                </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos}
            toggleComplete={toggleComplete}
            removeTodoItem={removeTodoItem}
            />
        </div>
    );
}

export default Plan;
