import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background >
        <img src = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'>
        </img>
      </Background>
      <ImageTitle>
        <img src = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'></img>
      </ImageTitle>
      <Controls>
       <PlayButton>
       <img src = 'images/play-icon-black.png'></img>
       <span>PLAY</span>
       </PlayButton>
       <TrailerButton>
       <img src = 'images/play-icon-white.png'></img>
       <span>Trailer</span>
       </TrailerButton>
       <AddButton>
       <span>+</span>
       </AddButton>
       <GroupWatchButton>
        <img src = 'images/group-icon.png'></img>
       </GroupWatchButton>
      </Controls>
      <Subtitle>
        2019 . 7m . Family, Kids ,Animation
      </Subtitle>
      <Description>
      Be mesmerised by the endless vistas of the Arabian Sea and the Mahalaxmi Racecourse towards the west, or the awe-inspiring panorama of the Eastern Harbour in the east. Rejuvenate amidst the tranquil greenery of the Jijamata Udyan near you, or a forested sanctuary and scenic pond just outside. Experience this exclusive life in sprawling, stunning residences with countless club avenues
      </Description>

    </Container>
  )
}

export default Detail
const Container = styled.div`
min-height : calc(100vh - 70px);
padding : 0 calc(4.5vw + 5px);
position : relative;
`
const Background = styled.div`
position : fixed;
top : 0px;
left :0px;
right :0px;
bottom : 0px;
z-index : -1;
opacity : 0.4;

img{
    height : 100%;
    width : 100%;
    object-fit : cover;
}


`
const ImageTitle = styled.div`
  height : 30vh;
  width : 30vw;
  min-height : 170px;
  min-width : 200px;
  padding : 39px;
  margin-left:-39px;
  img{
    height : 100%;
    object-fit : cover;
  }


`
const Controls = styled.div`
display : flex;
flex-direction : row;
align-items : center;
`

const PlayButton = styled.button`
display : flex;
padding : 0px 24px;
height : 56px;
background-color : rgb(249,249,249);
align-items :center;
border-radius :4px;
font-size : 15px;
border : none;
margin-right : 22px;
letter-spacing : 1.8px;
cursor : pointer;
&:hover{
    background-color : rgb(198,198,198);
}
`
const AddButton = styled.button`
width : 44px;
height : 44px;
display : flex;
align-items : center;
justify-content : center;
border-radius : 50%;
border :2px solid white;
background-color : rgb(0,0,0,0.6);
cursor : pointer;
margin-right : 16px;
span{
    font-size : 30px;
    color : white;
}
`
const TrailerButton = styled(PlayButton)`
background-color : rgb(0,0,0,0.3);
border : 1px solid rgb(249,249,249);
color : rgb(249,249,249);
text-transform : uppercase;
`
const GroupWatchButton = styled(AddButton)`
background : rgb(0,0,0);

`
const Subtitle = styled.div`
color : rgb(249,249,249);
font-size : 15px;
margin-top : 26px;
min-height : 20px;

`
const Description = styled.div`
line-height : 1.4;
font-size : 20px;
margin-top : 16px;
color : rgb(249,249,249);
width : 70vw;
`