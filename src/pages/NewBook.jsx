import { useHistory } from 'react-router';
import NewItemForm from '../components/titles/NewItemForm';
import pages from './pages.module.css'

function NewBookPage() {
    const history = useHistory()
    function addBookHandler(bookData) {
        fetch('https://bookguard-fa8ae-default-rtdb.firebaseio.com/books.json',
        {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/')
        })
    }
    return (
        <section>
            <div className={pages.modi}>New Book Page</div>
            <NewItemForm onAddBook={addBookHandler} />
        </section>
    );
}

export default NewBookPage;