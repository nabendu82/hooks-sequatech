import React, { useState } from 'react'
import axios from 'axios'

const PostForm = () => {
    const [ userId, setUserId ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', { userId,  title, body })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="userId">User ID </label>
            <input type="text" id="userId" value={userId} onChange={e => setUserId(e.target.value)} />
        </div>
        <br />
        <div>
            <label htmlFor="title">Title </label>
            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <br />
        <div>
            <label htmlFor="body">Body </label>
            <input type="text" id="body" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <br />
        <button type="submit">Submit</button>
    </form>
    )
}

export default PostForm