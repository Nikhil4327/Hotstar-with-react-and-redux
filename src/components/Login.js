import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src = '/images/cta-logo-one.svg'></CTALogoOne>
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
                i am nikhil attri ,i am currently working as a software developer in REA India .My main role is frontend development and my designation is softwarre development engineer
            </Description>
            <CtaLogoTwo src = '/images/cta-logo-two.png'>

            </CtaLogoTwo>
        </CTA>
      </Container>
  )
}

const Container = styled.div`
position : relative;
display : flex;
align-items :top;
justify-content : center;
height : calc(100vh - 70px);
&:after {
    background-repeat : no-repeat;
    background-size : cover;
    background-position : top;
    background-image : url("/images/login-background.jpg");
    position: absolute ;
    content: '';
    top: 0px ;
    left: 0px ;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity : 0.7;

 }
`
export default Login

const CTA = styled.div`
max-width : 650px;
margin-top:100px;
padding : 80px 40px;
width : 90%;
display : flex;
flex-direction : column;
align-items : center;
`
const CTALogoOne = styled.img`
width : 100%;
object-fit : cover;
`
const CtaLogoTwo = styled.img`
width : 90%;

`
const SignUp = styled.a`
width : 100%;
background-color : #0063e5;
font-weight : bold;
padding : 17px 0;
color : #f9f9f9;
text-align : center;
border-radius : 4px;
cursor : pointer;
font-size :18px;
transition : all 250ms;
letter-spacing : 1.5px;
margin: 8px 0px 12px;
&:hover{
    background-color : #0483ee
}

`
const Description = styled.p`
font-size : 15px;
letter-spacing : 1.5px;
text-align : center;
line-height : 1.5;

`