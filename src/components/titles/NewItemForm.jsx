import { useRef } from 'react';
import Card from "../ui/Card";
import classes from "./NewItemForm.module.css";

function NewItemForm(props) {
    const idInputRef = useRef();
    const nameInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredId = idInputRef.current.value;
        const enteredName = nameInputRef.current.value;

        const bookData = {
            id: enteredId,
            nombre: enteredName
        }
        props.onAddBook(bookData);
    }
    return ( <Card> 
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="id">Título</label>
                <input type="text" required id="id" ref={idInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="id">Autor</label>
                <input type="text" required id="name" ref={nameInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Add</button>
            </div>
        </form>
    </Card> );
}

export default NewItemForm;