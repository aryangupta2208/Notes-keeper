import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";


const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (val) => {
    // alert('clicked');
    setAddItem((prevData) => {
      return [...prevData, val];
    })
  };

  const onDelete = (id) => {
    setAddItem((oldData) => 
      oldData.filter((currData, index) => {
        return index !== id;  
      })
    )
  };


  return(
    <>
      <Header /> 
      <Footer />
      <CreateNote 
        passNote = {addNote}
      />
      {/* <Note /> */}

      {addItem.map((val, index) => {
        return <Note 
          key = {index}
          id = {index}
          title = {val.title}
          content = {val.content}
          deleteItem = {onDelete}
        />
      })}
      <Footer />
    </>
  )
};


export default App;