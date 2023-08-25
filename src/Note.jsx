import React from "react";

const Note = (props) => {

    const deleteNote = (e) => {
        e.preventDefault();
        props.deleteItem(props.id);
    };
    
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p> {props.content} </p>
                <button className="" onClick={deleteNote}> delete</button>
            </div>
        </>
    )
}

export default Note;