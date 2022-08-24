import React from 'react';
import NewBookForm from './components/bookform';
import BookList from './components/booklist';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';



function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
        <NewBookForm></NewBookForm>
      </BookContextProvider>
    </div>
  );
}

export default App;