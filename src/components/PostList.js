import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from './PostItem'

const PostList = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res);
    //             setPosts(res.data);
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
        }
        fetchData();
    }, [])

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList