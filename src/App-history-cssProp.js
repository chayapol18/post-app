import './App.css';
//CSS prop 
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react"


//ทำเอง จัดหน้า react
// function App() {
//   return (
//     <div> 
//       <div className="postapp-header">
//         <h1>Post App</h1> 
//         <button className="add-post-button">Add Post</button>
//       </div>

//       <div className="eachPost">
//         <h3>this is title !!</h3>
//         <p>Content is here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, explicabo!</p>
//         <div className="bottom-eachPost">
//           <p className="author">Author: John</p>
//           <button className="button">Edit Post</button>
//           <button className="button">Delete Post</button>
//         </div>
//       </div>

//       <div className="eachPost">
//         <h3>this is title !!</h3>
//         <p>Content is here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, explicabo!</p>
//         <div className="bottom-eachPost">
//           <p className="author">Author: John</p>
//           <button className="button">Edit Post</button>
//           <button className="button">Delete Post</button>
//         </div>
//       </div>
//     </div>
//   )
// }

//เฉลย
//style inline การเขียนเป็นรูปแบบ object และใช้ {}, ยกตัวอย่างการใส่สี ต้องใส่สีเป็น string >> .postapp-header
//css prop "@emotion/react" >> .post 
function App() {
  return (
    <div>
      <div className="postapp-header">
         <h1 style={{
           color: 'white',
           fontSize: '40px'
         }}>Post App</h1>
         <button className="add-post-button">Add Post</button>
       </div>

        <div className="post-list">
          <div className="post">
              <h3 css={css`
                color: grey;
                font-size: 40px;
              `}>Title: Post app</h3>
              <p>Post content</p>
              <div className="post-footer">
                <span>Author: John</span>
                <div className="post-footer-button">
                  <button className="post-footer-edit-button">Edit</button>
                  <button className="post-footer-delete-button">Delete</button>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

// export default App;

//default react ที่ใส่มาให้
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */