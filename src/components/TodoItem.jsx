import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../store/slices/TodosSlice"


export default function TodoItem( { todo } ) {

    const dispatch = useDispatch()

    const deleteHandler = () => dispatch(deleteTodo(todo.id))

    const doneHandler = () => dispatch(toggleTodo( { id : todo.id } ))

    return(
        <>

        <div className="flex mb-4 items-center">
            <p className={`mr-auto ${todo.done ? 'line-through text-green-600' : 'text-gray-700'}`}> { todo.text } </p>

            <button onClick={doneHandler}
                    className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600 cursor-pointer">

                {todo.done ? 'Not Done' : 'Done'}

                </button>

            <button onClick={deleteHandler}
                    className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600 cursor-pointer">Remove</button>
        </div>

        </>
    )

}
