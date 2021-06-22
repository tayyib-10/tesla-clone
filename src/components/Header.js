import React, {useState} from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlices";
import {useSelector} from 'react-redux'

function Header() {
  const[burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        {cars && cars.map((car, index) => {
          <a key={index}href="#">{car}</a>
        })}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu src="/images/hamburgerMenu.svg" onClick={() => setBurgerStatus(true)}/>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomCloseWrapper>
          <CustomClose src="/images/close-icon.svg" onClick={() => setBurgerStatus(false)}/>
        </CustomCloseWrapper>
        <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
      </BurgerNav>
    </Container>
  );
}

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenu = styled.img`
  cursor: pointer;
  background-color: transparent;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100% )'};
    transition: transform 0.2;
    text-align: start;     
    background: white;
    z-index: 10;

    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      
      a{
        font-weight: 600;
      }
    }
`

const CustomCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled.img`
  cursor: pointer;
  height: 25px;
`
export default Header;
