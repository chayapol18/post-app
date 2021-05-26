import { useState, useEffect } from 'react'
import { getPosts } from '../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

export function usePosts() {
    // const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(null);

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.posts)
    const isLoading = useSelector((state) => state.posts.status === 'pending')

    useEffect(function() {
        dispatch(getPosts()) // ต้องใช้ dispatch เพราะว่า redux ไม่ได้บอกว่า getPosts เป็น function แต่เป็น action, จะเป็น dispatch ซ้อน dispatch
    }, []);


    //ใช้ redux thunk แทน
    // useEffect(function() {
        
    //     async function getPosts() {
    //         try {
    //             let response =  await fetch("http://localhost:8000/posts");
    //             let data = await response.json(); 
    //             setPosts(data.data); 
    //         } catch(error) {
    //             setIsError(true)
    //             console.log("error !")
    //         }
    //     }
    //     getPosts()
    // }, []);

    async function handeleDeletePost(postId) {
        
        // let response = await fetch("http://localhost:8000/posts/" + postId, {
        //     method:"DELETE",
        // });
        // if (response.ok) {
        //     let newPosts = posts.filter((post) => {
        //         return post.id !== postId;
        //     })
        //     setPosts(newPosts);
        // }
    }

    return { posts, isError, isLoading, handeleDeletePost }
}