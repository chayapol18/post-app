import styled from "@emotion/styled" 

const StyledButton = styled.button`
border-radius: 5px;
background-color: khaki;
height: 40px;
width: 120px;
color: ${(props) => props.primary ? "crimson" : "black"};
`

function Button(props) {
    return <StyledButton onClick={props.onClick} {...props}>{props.children}</StyledButton>
}

//props.children >> children คือช่องระหว่าง tag ที่จะใส่เข้ามา <StyledButton>...</StyledButton>
//onClick ส่ง props เข้ามาเพิ่ม
//{...props} คือกระจาย props ทั้งหมดออกมาแปะไว้ในตัว StyledButton
//แต่การออกแบบ Component ไม่ควรมี parameter, props เยอะเกินไป

export default Button;