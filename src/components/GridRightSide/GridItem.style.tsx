import styled from "styled-components";

interface gridItemProps {
    color: string;
}

export const Grid = styled.div<gridItemProps>`
 background-color: ${(props) => props.color};
 flex: 1;
 color: white;
 border-radius: 25px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 20px;
`

export const Icon = styled.div`
width: 70px;
height: 70px;
background-color: rgba(0,0,0, .1);
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 40px;
}
    
`
export const Title = styled.div`
font-size: 30px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
margin-top: 10px;
`

export const YourImc = styled.div`
margin-top: 15px;
`

export const ImcInfo = styled.div`
margin-top: 15px;
    
`
