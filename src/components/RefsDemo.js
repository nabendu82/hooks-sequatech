import React, { useEffect, useRef } from 'react'

const RefsDemo = () => {
    const nameRef = useRef(null);
    const commentRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log('User entered - ' + nameRef.current.value + '-' + commentRef.current.value)
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" ref={nameRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" ref={commentRef}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
    )
}

export default RefsDemo