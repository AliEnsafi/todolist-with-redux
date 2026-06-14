
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {

    const todos = useSelector(state => state.todos.list)

    return(

    <>
        <div>
            {   todos.map(todo => <TodoItem todo={todo} key={todo.id} />)   }
        </div>
    </>

    )
}
