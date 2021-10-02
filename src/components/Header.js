import React from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="#">
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        {/* <CustomMenu /> */}
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: upperCase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: upperCase;
    margin-right: 10px;
  }
`;

// const CustomMenu = styled(MenuIcon)`
//   cursor: pointer;
// `;
