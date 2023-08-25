import React, { useState } from "react";

const CreateNote =(props) => {
    const [val, setVal] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        // console.log(name);
        // console.log(value);
        setVal((prev) => {
            console.log(prev);
            return {
                ...prev,
                [name]: value,
            }
        });
        // console.log(val);
    }

    const addEvent = (e) => {
        e.preventDefault();
        props.passNote(val);
        setVal({
            title: "",
            content: "",
        });
    }

    return(
        <>
            <div className="main_note">
                <form>
                    <input 
                    type='text' 
                    name="title"
                    value={val.title}
                    onChange={InputEvent} 
                    placeholder="Title" 
                    autoComplete="off"
                    />
                    <textarea 
                    rows='' 
                    column='' 
                    name="content"
                    value={val.content}
                    onChange={InputEvent}
                    placeholder="Write a note..."
                    ></textarea>
                    <button className="plus_sign" onClick={addEvent}> + </button>
                </form>
            </div>
        </>
    )
}

export default CreateNote;