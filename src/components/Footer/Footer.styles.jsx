import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../fonts/Raleway-VariableFont_wght.ttf";

export const Form = styled.div`
  position: absolute;
  width: 1075px;
  height: 430px;
  left: 137px;

  background: #ffdd1f;
  mix-blend-mode: normal;
  border-radius: 49px;
  border: 2px solid #fff;
`;

export const Error = styled.p`
  position: absolute;
  width: 876px;
  height: 35px;
  left: 75px;
  top: 213px;

  font-family: Raleway;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: red;
`;

export const FormImg = styled.img`
  position: absolute;
  width: 600px;
  height: 600px;
  left: 490px;
  top: -160px;
  /* unclickable image */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -moz-user-drag: none;
  -khtml-user-drag: none;
  -webkit-user-drag: none;
  user-drag: none;
`;

export const Title = styled.p`
  position: absolute;
  width: 400px;
  height: 106px;
  left: 75px;
  top: 40px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 45px;
  line-height: 53px;

  color: #ffffff;
`;

export const SubTitle = styled.p`
  position: absolute;
  width: 549px;
  height: 70px;
  left: 75px;
  top: 146px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;

  color: #ffffff;
`;

export const FormInputField = styled.input`
  position: absolute;
  height: 60px;
  border: 1px solid #ABA3A3;
  background: transparent;
  outline:none;
  padding-left: 10px;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #6D6D6D;
    opacity: 1; /* Firefox */
  }  
`;

export const Button = styled.button`
  position: absolute;

  background: transparent;
  width: 370px;
  height: 60px;
  left: 75px;
  top: 325px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  border: 3px solid #fff;
  transition-duration: 0.4s;
  cursor: pointer;
  outline: none;
  :hover {
    background: #fff;
    color: #000;
  }
`;

export const RectAngle = styled.div`
  position: absolute;
  width: 1349px;
  height: 520px;
  top: 350px;
  border-top: 2px solid #fff;
  background: #c4c4c4;
  mix-blend-mode: soft-light;
`;

export const RectEnd = styled.div`
  position: absolute;
  width: 1349px;
  height: 95px;
  left: 0px;
  top: 820px;

  background: #ffdd1f;
`;

export const CopyRightLogo = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 980px;
  top: 840px;
  /* unclickable image */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -moz-user-drag: none;
  -khtml-user-drag: none;
  -webkit-user-drag: none;
  user-drag: none;
`;

export const CopyRight = styled.p`
  position: absolute;
  width: 250px;
  height: 36px;
  left: 1050px;
  top: 850px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: #272727;
`;

export const LogoContainer = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  left: 23px;
  top: 825px;
`;

export const SocialContainer = styled.div`
  position: absolute;
  width: 390px;
  height: 224px;
  left: 822px;
  top: 517px;
`;

export const SocialTitle = styled.p`
  position: absolute;
  width: 159px;
  height: 29px;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;

  color: #ffffff;
`;

export const ContactLogoContainer = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  /* unclickable image */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -moz-user-drag: none;
  -khtml-user-drag: none;
  -webkit-user-drag: none;
  user-drag: none;
`;

export const SocialLogoContainer = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 250px;
  /* unclickable image */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -moz-user-drag: none;
  -khtml-user-drag: none;
  -webkit-user-drag: none;
  user-drag: none;
`;

export const ContactLink = styled.p`
  position: absolute;
  width: 144px;
  height: 18px;
  left: 35px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  color: #ffffff;
  :hover {
    color: #ffdd1f;
  }
`;

export const SocialLink = styled.p`
  position: absolute;
  width: 144px;
  height: 18px;
  left: 285px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  color: #ffffff;
  :hover {
    color: #ffdd1f;
  }
`;

export const NavContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 180px;
  left: 137px;
  top: 517px;
`;
export const NavLink = styled(Link)`
  position: absolute;
  width: 144px;
  height: 18px;
  text-decoration: none;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  color: #ffffff;
  :hover {
    color: #ffdd1f;
  }
`;
