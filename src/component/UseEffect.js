import { useEffect, useState } from "react";
import ExtraCounter from "./ExtraCounter"
import Counter from "../Counter"

// useEffect จะ run ทุกครั้งที่ state มันเปลี่ยน โดยรวมถึงเมื่อ mount useEffect จะ run เป็นครั้งแรก (เข้ามาจัดการ life-cycle ของ react)
// useEffect แบ่งเป็น 3 ช่วง >> 1. mount(เมื่อสร้างหรือเริ่มต้นการ render หน้าเว็บ โดย useEffect ช่วง mount จะทำโดย callback func แรก) 2. updating(state เปลี่ยนแปลงค่าที่ mount เข้ามา) 3. unmount(เมื่อเปลี่ยนหน้า, เมื่อออกจากหน้านั้น)

function CounterPage() {
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        console.log("Effect is running once")
    }, [])

    // useEffect(() => {
    //     console.log("Effect is running more than once")
    // }, [toggle]) // [] จะทำให้ run แค่ครั้งแรกครั้งเดียว เพราะไม่ sync effect กับอะไรเลย, ถ้าใส่เป็น [toggle] แสดงว่าจะ run callback func ของ useEffect ทุกครั้งที่ toggle เปลี่ยน

    useEffect(() => {
        // console.log("Test clean up func")

        return () => {
            //clean up function >> clear ของให้เรียบร้อยก่อน component นี้จะไม่อยู่บนหน้าเว็บ
            console.log("Clean up already")
        }
    }, [toggle])

    return (
        <div>
            <h1>Counter Page</h1>
            {toggle && <ExtraCounter />}
            {/* อยากเอา state มาใช้ด้านนอก โดยยก state ด้านในมาไว้ด้านนอก*/}
            {toggle && <Counter counter={counter} setCounter={setCounter}/>}
            <h1>Show Counter: {counter}</h1>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )

}

export default CounterPage;