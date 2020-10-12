import styled ,{css}from 'styled-components'
import {Link} from 'react-router-dom'

const OptionContainerStyles = css`
cursor: pointer;
padding: 10px 15px;
font-size: 20px;
font-family: 'Dancing Script', cursive;
`


 export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
-webkit-box-shadow: 0px 0px 5px -2px rgba(71,69,71,0.41);
-moz-box-shadow: 0px 0px 5px -2px rgba(71,69,71,0.41);
box-shadow: 0px 5px 5px -2px rgba(71,69,71,0.41);
`;

export const LogoContainer = styled(Link)`
height: 80%;
width: 50px;
padding: 20px;
margin-top: 10px;
margin-left: 10px;
background-image: url(../../assets/logo.png);
background-size: cover;
background-position: center;
background-repeat: no-repeat;

`;

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
export const OptionLink = styled(Link)`
${OptionContainerStyles}
`
export const OptionDiv = styled.div`
${OptionContainerStyles}
`