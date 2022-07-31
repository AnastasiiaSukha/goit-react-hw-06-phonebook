import styled from '@emotion/styled'

export const List = styled.ul`
list-style: none;
font-size: 18px;
display:flex;
flex-direction:column;
margin-top: 30px;
padding: 5px;
>li {
    margin-bottom:10px;
    width: 350px;
    
}
`

export const DeleteButton = styled.button`
margin-left: 15px;
float:right;
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
background-color: #2c974b;

`