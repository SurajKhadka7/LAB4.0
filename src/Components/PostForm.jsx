// PostForm.js
import React from 'react';

    const PostForm=({title,body,onInputChange,onAddPost})=>{
        return (
            <div style={{marginTop:'15px',}}>

                <h2>Add a New Post</h2>
                <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={onInputChange}
                style={{display:'block', margin:'15px 0',padding:'5px'}}
                />
                <textarea
               name="body"
               placeholder ="Body"
               value={body}
               onChange={onInputChange}
               style={{display:'block', margin:'10px 0',padding:'5px'}}
                />
                <button onClick={onAddPost} style={{padding:'5px 10px'}}>Submit
                </button>
            </div>
        )
    }
        
           
    

export default PostForm;
