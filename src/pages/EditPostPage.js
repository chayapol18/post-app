/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { useHistory  } from "react-router-dom" 
import Button from "../component/Button"

const InputBox = styled.input`
  border-radius: ${(props) => props.primary ? "40px" : "5px"};
  line-height: ${(props) => props.primary ? "300px" : "40px"};
  width: 500px;
  margin-bottom: 20px;
  margin-top: 10px;
`

function EditPostPage() {
    const [post, setPost] = useState({})
    
    let params = useParams()
    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")

    let history = useHistory()
    
    useEffect(() => {
        async function EditPostById() {
            let response = await fetch("http://localhost:8000/posts/" + params.postId);

            let data = await response.json()
            setPost(data.data)
            // setTitle(data.data.title)
            // setDescription(data.data.content)
        };
        EditPostById();
        // setTitle(post.title)
        // setDescription(post.content)
        
    }, [])

    function handleTitleChange(event) {
        // setPost({title: event.target.value, content: post.content})
        setPost({...post, title: event.target.value}) //copy ค่าก่อนหน้ามา + ค่าที่พิมพ์เพิ่มเข้าไป
    }

    function handleDescriptionChange(event) {
        // setPost({title: post.title, content: event.target.value})
        setPost({...post, content: event.target.value})
    }

    async function editPost() {
        let response = await fetch("http://localhost:8000/posts/" + params.postId, {
            method: "PUT",
            body: JSON.stringify(post),
            headers: {
                "content-type": "application/json"
            } //headers ตือจะบ่งบอกว่าจะส่งอะไรไป ดูได้ใน network 
        })
        if (response.ok) {
        history.push("/")
    }
    
    }
    
    function handleFormSubmit(event) { // func ในการกำหนดการทำงานของปุ่ม add (submit) ของ onSubmit ใน form
        event.preventDefault()
        editPost()
        console.log("submit")
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <div className="postapp-header">
                <h1>Edit Post</h1>
            </div>
            <div>
                <label htmlFor="title" css={
                    css`
                    display: flex;
                    font-size: 25px;
                    margin-bottom: 0px;
                `}
                >
                    Title</label>
                <InputBox id="title" type="text" onChange={handleTitleChange} value={post.title}></InputBox>
                <label htmlFor="description"css={
                    css`
                    display: flex;
                    font-size: 25px;
                    margin-bottom: 0px;
                `}
                >Description</label>
                <InputBox id="description" type="text" onChange={handleDescriptionChange} value={post.content} primary></InputBox>
                <br/>
                <Button type="submit">Edit</Button>
            </div>
            </form>
        </div>
    )
}

export default EditPostPage;