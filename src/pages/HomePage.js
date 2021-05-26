// import styled from "@emotion/styled" 

/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react"

import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCounter } from '../contexts/counter'
import { usePosts } from '../utilities/post'

import Button from "../component/Button"
// ย้ายไปทำส่วนกลางใน button.js
// const StyledButton = styled.button`
//   border-radius: 5px;
//   background-color: khaki;
//   height: 40px;
//   width: 120px;
//   color: ${(props) => props.primary ? "crimson" : "black"};
// `

// import { useHistory } from "react-router-dom" >> let history = useHistory() >> (func)history.push("/path") >> คือคำสั่งในการเดินทางไปหา path ที่เราตั้งค่าไว้
// import { useEffect } from "react" >> useEffect(function, [])
// fetch จะ request ข้อมูลจาก server แต่ได้เป็น promise คือไม่รู้จะทำงานเสร็จเมื่อไหร่เลยต้องใส่ await และต้องคู่กับ async แต่ไม่สามารถใส่ async แบบนี้ไม่ได้ useEffect( async function() {...}, [] ) เลยต้องกำหนดเป็น func getPosts() ขึ้นมาช่วย
// let data = await response.json() การแกะข้อมูลจากที่ fetch รับมาออกมาใช้ ซึ่ง json ก็จะ return ออกมาเป็น promise เลยต้องใส่ await เช่นกัน
//*** state คือข้อมูลที่สามารถเปลี่ยนแปลงได้ ถ้าหน้าเว็บไม่มี state เว็บเราก็จะไม่มีสิ่งอะไรที่เปลี่ยนแปลงได้ นิ่งๆ ***
//**** useState >> [posts, setPosts] = useState([]) >> สร้างตัวแปร useState โดยค่าตั้งต้นคือ []  จากการกำหนด useState([]) (posts) และ setPosts(n) จะเอาค่าที่กำหนด(n)มาเปลี่ยนแปลงค่าตั้งต้น(posts)
// กำหนด useState([]) แบบนี้เพราะว่าเราเข้าหน้าเว็บมา เราก็ไม่ควรเห็นอะไรที่อัพเดทก็เลยกำหนดเป็น array เปล่าๆ
// setPosts(data.data) >> data คือ object แต่เราจะเอา Array ใน data มาเก็บไว้ใน posts 
// ทำไมข้อมูลเราต้องเป็น Array ? เพราะว่าข้อมูล post เรามีของหลายชิ้น (ชุดของข้อมูล (object))
// posts.map() >>  เอาข้อมูลที่เตรียมไว้มาใช้ใน tag html บนหน้าเว็บ
//try, catch ไว้แสดงเมื่อ error บนเว็บ โดยสร้าง state ขึ้นมาใหม่ >> จากนั้นไปตั้งค่าเงื่อนไข เมือ่เกิด error => {isError && <h1>Something went wrong, Please try again tmr.</h1>}
 
function HomePage() {
    //[state, setState]
    // ย้ายไปใช้ custom hook ใน post.js
    // const [posts, setPosts] = useState([]);
    // const [isError, setIsError] = useState(null);
    let history = useHistory();

    const { state } = useCounter();

    const { posts, isError, isLoading, handeleDeletePost } = usePosts()

    //ย้ายไปใช้ custom hook ใน post.js
    // useEffect(function() {
        
    //     async function getPosts() {
    //         try {
    //             let response =  await fetch("http://localhost:8000/posts"); //ขอข้อมูลจาก server
    //             let data = await response.json(); // เอาข้อมูลจาก server ที่ขอมาเก็บไว้ใน data
    //             setPosts(data.data); // เอา array ใน object ออกมาเก็บไว้ใน posts (useState)
    //         } catch(error) {
    //             setIsError(true)
    //         }
    //     }
    //     getPosts()
    // }, []);

    function handleAddPostClick() {
        history.push("/addpost")
    }

    //ย้ายไปใช้ custom hook ใน post.js
    // async function handeleDeletePost(postId) {
    //     //สร้าง unique post ว่าเป็น post ไหนด้วย id
    //     let response = await fetch("http://localhost:8000/posts/" + postId, {
    //         method:"DELETE", //API Document ตามเงื่อนไขที่เราอยากจะทำ, ถึงขั้นนี้คือ ลบเรียบร้อยแล้วแต่เหมือนยังเห็นโพสที่ลบออกไปอยู่ต้องรีเฟรชถึงจะหายไป
    //     });
    //     if (response.ok) {
    //         let newPosts = posts.filter((post) => {
    //             return post.id !== postId; //แสดง post ที่ไม่ได้ถูกลบไป
    //         })
    //         setPosts(newPosts); //render หน้า homepage ใหม่ด้วย post ที่เหลือ
    //     }
    // }

    return (
        <div>
            <div className="postapp-header">
                <h1 style={{
                color: 'white',
                fontSize: '40px'
                }}>Post App</h1>
                <Button onClick={handleAddPostClick}>Add Post</Button>
                {/* <StyledButton primary={true} onClick={handleAddPostClick}>Add Post</StyledButton> */}
                {/* <button className="add-post-button">Add Post</button> */}
            </div>

            <div className="post-list">
                {isLoading && <h1>Loading . . .</h1>}
                {isError && <h1>Something went wrong, Please try again tmr.</h1>}
                {
                    posts.map((post) => {
                        return (
                            // เวลา map element ออกมาหลายๆตัวให้ใส่ key ไปให้มันด้วย
                            <div key={post.id} className="post">
                                <h3 css={css`
                                    color: grey;
                                    font-size: 40px;
                                `} onClick={() =>
                                    history.push("/post/" + post.id) //+ post.id คือการบ่งบอกว่า click ที่ title ของกล่องไหนอยู่
                                }
                                >
                                    Title: {post.title}</h3>
                                <p>{post.content}</p>
                                <div className="post-footer">
                                    <span>Author: John</span>
                                    <div className="post-footer-button">
                                        <Button onClick={() =>
                                             history.push("/editpost/" + post.id)
                                        }>Edit</Button>

                                        <Button onClick={function() {
                                            handeleDeletePost(post.id)}}
                                            >Delete</Button>
                                            
                                        {/* <StyledButton primary>Edit</StyledButton>
                                        <StyledButton primary={false} onClick={function() {
                                            handeleDeletePost(post.id)} }>Delete</StyledButton> */}
                                            {/* ส่ง id เข้าไปให้ handeleDeletePost */}
                                    </div>
                                </div>

                            </div>
                        )
                })}
            </div>
            <div>
                <button onClick={() => history.push('/counter')}>Go counter</button>
                <h1>Counter: {state.counter}</h1>
            </div>
        </div>
    )
}

export default HomePage