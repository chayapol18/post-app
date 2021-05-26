import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddPostPage from "./pages/AddPostPage"
import SinglePostPage from "./pages/SinglePostPage"
import CounterPage from "./component/CounterPage"
import UseEffect from "./component/UseEffect"
import EditPostPage from "./pages/EditPostPage"
import { CounterProvider } from './contexts/counter'
import DesignSystemPage from './pages/DesignSystemPage'

// Route path="/home"  >> ถ้าอยากให้เป็นหน้าแรกของเว็บเลยก็ใส่แค่ / อย่างเดียว ไม่ต้องใส่อะไรต่อ Route path="/"
//CounterProvider => provider จะครอบตัว children ที่ต้องการ consume เสมอ
function App() {
  return (
      <div>
        <CounterProvider>
          <BrowserRouter>
            <Switch>
                {/* <Route path="/home" component={HomePage}></Route> */}
                {/* path คือ เมื่อเว็บมี .../home ให้ render HomePage  */}
                <Route path="/design-system" component={DesignSystemPage}></Route>
                <Route path="/counter" component={CounterPage}></Route>
                <Route path="/useeffect" component={UseEffect}></Route>
                <Route path="/addpost" component={AddPostPage}></Route>
                <Route path="/post/:postId" component={SinglePostPage}></Route> 
                {/* :postId >> parameter ในการบ่งชี้ว่ากดตัว title ของกล่องไหน ต้องใส่ : ด้วยอย่าลืม */}
                {/* ถ้าจะตั้ง path ให้หน้าแรกแต่ render path ของหน้าอื่นไม่ได้ ให้เอา path หน้าแรกมาไว้ด้านล่างสุด เพราะ ไม่งั้นระบบจะเจอ "/" ก่อนเลยหยุด render ที่ "/" แล้วไม่ render path อื่นๆต่อ  */}
                <Route path="/" component={HomePage}></Route>
            </Switch>
          </BrowserRouter>
        </CounterProvider>
      </div>
  )
}

export default App;
