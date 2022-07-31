import styled from '@emotion/styled'

export const FilterInput = styled.input`
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
export const FilterLabel = styled.label`
  color:#999; 
  font-size:18px;
  font-weight:normal;
`