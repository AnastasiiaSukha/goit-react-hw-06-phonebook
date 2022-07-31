import styled from '@emotion/styled'

export const Form = styled.form`
display:flex;
flex-direction:column;
`

export const Input = styled.input`
height: 30px;
width: 300px;
font-size:18px;
padding: 10px, 10px, 10px, 5px;
display:block;
border:none;
border-bottom: 1px solid #757575;

&:focus {
    outline: none;
    width: 350px;
    border:none;
    border-bottom: 3px solid #2ea44f;
}

`
export const Label = styled.label`
  color:#999; 
  font-size:18px;
  font-weight:normal;
`
export const AddButton = styled.button`
margin-top:15px;
width: 150px;
height: 40px;
background-color: #2ea44f;
border: 1px solid rgba(27, 31, 35, .15);
border-radius: 6px;
box-sizing: border-box;
color: #fff;
cursor: pointer;
font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
font-size: 14px;
font-weight: 600;
line-height: 15px;
padding: 6px 16px;
text-align: center;
&:hover {
background-color: #2c974b;`