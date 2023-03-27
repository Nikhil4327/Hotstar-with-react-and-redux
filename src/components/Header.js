import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
     <Logo src = '/images/logo.svg'/>
     <NavMenu>
      <a>
        <img src = '/images/home-icon.svg'/>
        <span>HOME</span>
      </a>
      <a>
        <img src = '/images/search-icon.svg'/>
        <span>SEARCH</span>
      </a>
      <a>
        <img src = '/images/watchlist-icon.svg'/>
        <span>WATCHLIST</span>
      </a>
      <a>
        <img src = '/images/original-icon.svg'/>
        <span>ORIGINAL</span>
      </a>
      <a>
        <img src = '/images/movie-icon.svg'/>
        <span>MOVIES</span>
      </a>
      <a>
        <img src = '/images/series-icon.svg'/>
        <span>SERIES</span>
      </a>
     </NavMenu>
     <UserImg src = 'https://im.rediff.com/cricket/2023/jan/17kohli1.jpg'></UserImg>
    </Nav>
  )
}

export default Header
const Nav = styled.nav`
height : 70px;
background-color : #090b13;
color : white;
display : flex;
align-items : center;
padding : 0px 36px;
overflow-x:hidden;
`
const Logo = styled.img`
width : 70px ;
`

const NavMenu =styled.div`
  display : flex;
  flex : 1; // this is most important section of nav container
  margin-left : 25px;
  align-items : center;


  a{
    display : flex;
    align-items : center;
    padding : 0 12px;
    cursor : pointer;
    
    img {
        height : 20px ;
    }
    span{
        font-size : 13px;
        letter-spacing : 1.42px;
        position : relative;
        &:after{
            content : '';
            position : absolute;
            left : 0px ;
            right : 0px;
            bottom : -6px;
            background : white;
            height : 2px;
            opacity : 0 ;
            transform-origin : left center;
            transform : scaleX(0);
            transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
    }
    &:hover {
        span:after
        {
            transform : scaleX(1);
            opacity : 1;
        }
       
    }
  }
`
const UserImg = styled.img`
  width : 48px ;
  height : 48px ;
  border-radius : 48px;
  cursor : pointer;
`
