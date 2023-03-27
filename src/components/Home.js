import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
function Home() {
  return (
    <Container>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Movies></Movies>
    </Container>
  )
}

export default Home

const Container = styled.div`
min-height : calc(100vh - 70px);
padding : 0 calc(3.5vw + 5px);
position : relative;
overflow-x : hidden;
 &:after {
    background : url('/images/home-background.png') center center /cover no-repeat fixed;
    position : absolute ;
    content : '';
    top : 0px ;
    left : 0px ;
    width : 100%;
    height : 100%;
    z-index : -1;

 }
`
