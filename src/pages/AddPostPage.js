/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { useState } from "react" 
import { useHistory  } from "react-router-dom" 
import Button from "../component/Button"

const StyledLabel = styled.label`
  display: flex;
  font-size: 25px;
  margin-bottom: 0px;
`

const InputBox = styled.input`
  border-radius: ${(props) => props.primary ? "40px" : "5px"};
  line-height: ${(props) => props.primary ? "300px" : "40px"};
  width: 500px;
  margin-bottom: 20px;
  margin-top: 10px;
`
// const StyledButton = styled.button`
//   border-radius: 5px;
//   height: 40px;
//   width: 120px;
//   background-color: white;
//   margin-left: 190px;
// `

//เพิ่มค่า title และ description ที่เปลี่ยนแปลง ไปที่หน้า homepage ด้วย onChange โดยการสร้าง useState ให้ state ที่เปลี่ยนแปลงบนหน้าเว็บ(title, description) >> สร้าง function ที่จะรับค่าที่ user พิมพ์เข้ามา (event.target.value) เก็บเอาไว้ใน state
//อย่าลืมใส่ value ให้ title, description เพราะเป็นการอัพเดทตาม value นั้นจริงๆ
//ต้องส่งเป็น POST เพราะจะส่งค่าไปด้วย
//เปลี่ยนรูปแบบเป็น form ครอบทั้งสองส่วนไว้ >> เปลี่ยนปุ่มให้เป็น type="submit" >> สร้าง func 
//fetch หลายๆครั้ง ยกตัวอย่างเช่น ตำแหน่งการวิ่งของ line man ที่ต้อง fetch ตำแหน่งเวลา line man ขยับ

function AddPostPage() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    let history = useHistory()

    function handleTitleChange(event) {
        setTitle(event.target.value) // event.target.value คือสิ่งที่ user พิมพ์เข้ามา
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }

    async function createPost() { // func ในการส่งข้อมูลไปที่ server และ หน้าเว็บ homepage
        let response = await fetch("http://localhost:8000/posts/", {
            method: "POST", //API Document >> Create Post >> { "title": "post title", "content": "post content" }
            body: JSON.stringify({ title: title, content: description }), // ส่งไปแบบ JSON
            headers: {
                "content-type": "application/json"
            }
        })
        //func ในการเปลี่ยนหน้ากลับไป homepage
        if (response.ok) {
        history.push("/") //เป็น stack (Array)
    }
    }

    

    function handleFormSubmit(event) { // func ในการกำหนดการทำงานของปุ่ม add (submit) ของ onSubmit ใน form
        event.preventDefault()
        createPost()
        console.log("submit")
    }

    console.log("title: ", title)
    console.log("description: ", description)

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="postapp-header">
                    <h1>Post App</h1>
                </div>

                <div className="post-description" css={css` padding-left: 10px; `}>
                    <div>
                        <StyledLabel htmlFor="title">Title</StyledLabel>
                        <InputBox id="title" type="text" placeholder = "Enter post title" onChange={handleTitleChange} value={title}></InputBox>
                    </div>
                    <div>
                        <StyledLabel htmlFor="description">Description</StyledLabel>
                        <InputBox id="description" primary placeholder = "Enter post description" onChange={handleDescriptionChange} value={description}></InputBox>
                    </div>
                </div>

                <Button type="submit">Add</Button>
                {/* <StyledButton type="submit">Add</StyledButton> */}
            </form>
        </div>
    )
}

export default AddPostPage