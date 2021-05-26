/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { usePosts } from '../utilities/post'


function SinglePostPage() {
    const [post, setPost] = useState({}) // เป็น {} เพราะว่าได้ข้อมูลข้างในจาก data เป็น object, ขึ้นอยู่กับส่งข้อมูลออกมาและเก็บเป็นแบบไหน

    const { posts } = usePosts()

    let params = useParams()
    
    useEffect(() => {
        async function getPostById() {
            let response = await fetch("http://localhost:8000/posts/" + params.postId);

            let data = await response.json() // แกะข้อมูล
            setPost(data.data)
        };
        getPostById();

    }, [])

    return (
        <div>
            <div className="postapp-header">
                <h1 
                    css={css`
                        color: grey;
                        font-size: 40px;
                    `}
                >
                    Single post page</h1>
            </div>

            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>

            <hr/>

            <div>

                <h1>Post List</h1>

                {
                    posts.map(post => {
                        return <h2>{post.title}</h2>
                    })
                }

            </div>
        </div>
    ) 
}

export default SinglePostPage;