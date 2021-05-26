import './App.css';
//CSS prop 
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react"
// Styled Component
import styled from "@emotion/styled" 

// CSS Styled Component
// เนื่องจากเป็น component ถ้าจะใช้ต้องทำเป็น tag ครอบ (<StyleButton></StyleButton>)
// เขียนเป้น func ได้เนื่องจากเป็น css expression (color)
// styled.button >> button คือ html tag <button></button> จะเป็นอย่างอื่นก็ได้เช่น styled.h1 , styled.div
const StyledButton = styled.button`
  border-radius: 5px;
  background-color: khaki;
  height: 40px;
  width: 120px;
  color: ${(props) => props.primary ? "crimson" : "cornflowerblue"};
`
// Styled Component "@emotion/styled"
function App() {
  return (
    <div>
      <div className="postapp-header">
         <h1 style={{
           color: 'white',
           fontSize: '40px'
         }}>Post App</h1>
         <StyledButton primary={true}>Add Post</StyledButton>
         {/* <button className="add-post-button">Add Post</button> */}
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
                  {/* true == primary */}
                  <StyledButton primary>Edit</StyledButton>
                  <StyledButton primary={false}>Delete</StyledButton>
                  {/* <button className="post-footer-edit-button">Edit</button>
                  <button className="post-footer-delete-button">Delete</button> */}
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