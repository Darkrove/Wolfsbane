import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../../fonts/Raleway-VariableFont_wght.ttf";

export const HeaderContainer = styled.header`
  background-color: #03034a;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1001;
  display: block !important;
  opacity: 1 !important;
`;

export const LogoWrapper = styled.div``;

export const LogoContainer = styled(NavLink)``;

export const Logo = styled.img`
  position: absolute;
  left: 45.66%;
  right: 45.74%;
  top: 10%;
  height: 116px;
  width: 116px;
  border-radius: 0px;
`;

export const MenuWrapper = styled.div``;

export const MenuLeft = styled.nav`
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 405px;
  height: 36px;
  left: 50px;
  top: 40px;
`;

export const MenuRight = styled.nav`
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 395px;
  height: 36px;
  left: 850px;
  top: 40px;
`;

export const MainMenu = styled.ul``;

export const MenuItem = styled.li`
  display: inline-block;
  padding-right: 20px;
  padding-left: 20px;
  font-family: Ralway;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  /* identical to box height */
  color: #ffffff;

  a {
    color: #808080;
    position: relative;
    font-size: 23px;
    text-decoration: none;
  }
  a:hover {
    transition: all 0.5s ease-in-out;
    color: #fff;
  }
`;

export const Branding = styled.p`
  position: absolute;

  height: 36px;
  width: 89px;
  left: 46.34%;
  top: 108px;
  border-radius: nullpx;

  font-family: Teko;
  font-style: normal;
  font-weight: 1000;
  letter-spacing: 0.4px;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height */

  color: #ffffff;
`;

export const Vector = styled.img`
  position: absolute;
  height: 15px;
  width: 30px;
  left: 47.7%;
  top: 140px;
  border-radius: 0px;
`;

export const Title = styled.p`
  position: absolute;
  height: 18px;
  width: 28px;
  left: 50.5%;
  top: 138px;
  border-radius: nullpx;

  font-family: Teko;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 21px;

  color: #ffffff;
`;
