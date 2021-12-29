import { useState, useEffect } from 'react';
import TitleList from '../components/titles/TitleList';
import pages from './pages.module.css';

const fire = 'https://bookguard-fa8ae-default-rtdb.firebaseio.com/books.json'


function AllBooksPage() { 

const [isLoading, setIsLoading] = useState(true);
const [loadedBooks, setLoadedBooks] = useState([]);

useEffect(() => {
    setIsLoading(true);
    fetch(fire
        ).then(response => { return response.json() }
        ).then((data) => { 
            const books = [];
            for (const key in data) {
                const book = {
                    id: key
                };
            books.push(book);
            };

            setIsLoading(false);
            setLoadedBooks(books);
         });
}, [])

    if(isLoading) {
        return (
            <section>
                <p>Cargando</p>
            </section>
        )
    }

    return (
        <section>
            <h1  className={pages.modi}>Libros leídos</h1>
            <TitleList titles={loadedBooks}>
            </TitleList>
        </section>
    );
}

export default AllBooksPage;