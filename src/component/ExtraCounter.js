import React from "react"

// Class component จะอยู่ใน ES5 เป็นแบบเก่าที่เคยใช้กันแต่ เขียนแบบ func จะง่ายกว่า
class ExtraCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        // this.handleAddCounter = this.handleAddCounter.bind(this) //bind คือผูกเข้าไป วิธีเขียนแบบ Class component ตั้งต้นแต่ยุ่งยาก
    }

    //ใช้วิธีนี้ต้องทำ bind this ด้านบนด้วยไม่งั้นจะ error
    // handleAddCounter() {
    //     this.setState(function(state) {
    //         return { counter: state.counter + 1 }
    //     });
    // }

    componentDidMount() {
        console.log("Mounting")
    }

    componentDidUpdate() {
        console.log("Component is updated !")
    }

    componentWillUnmount() {
        console.log("Component is dying (disappear from dom)")
    }

    handleAddCounter = () => {
        this.setState(function(state) {
            return { counter: state.counter + 1 }
        });
    }

    handleSubtractCounter = () => {
        this.setState(function(state) {
            return { counter: state.counter - 1 }
        });
    }

    handleResetCounter = () => {
        this.setState(function(state) {
            return { counter: 0 }
        });
    }

    render() {
        return (
            <div>
                <h1>ExtraCounter: {this.state.counter}</h1>
                {/* <h1>Counter: 0</h1> */}
                <button onClick={this.handleAddCounter}>Add</button>
                <button onClick={this.handleSubtractCounter}>Subtract</button>
                <button onClick={this.handleResetCounter}>Reset</button>
            </div>
        )
    }
}

export default ExtraCounter;