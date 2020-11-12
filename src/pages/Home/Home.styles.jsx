import styled from "styled-components";
import "../../fonts/Raleway-VariableFont_wght.ttf";

export const IntroBigPannel = styled.img`
  position: absolute;
  height: 496px;
  width: 494px;
  left: 440px;
  border-radius: 0px;
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

export const IntroSmallPannel = styled.img`
  position: absolute;
  height: 168px;
  width: 168px;
  border-radius: 0px;
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

export const SpotLight = styled.img`
  position: absolute;

  border-radius: 0px;
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

export const H1 = styled.h1`
  position: absolute;
  width: 830px;
  height: 300px;
  left: 260px;
  top: 574px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 100px;
  /* or 143% */

  text-align: center;

  color: #ffffff;
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 610px;
  height: 344px;
  background: #c4c4c4;
  mix-blend-mode: soft-light;
  transition-duration: 0.5s;
  border: 2px solid #fff;
`;

export const AchievmentRect = styled.div`
  position: absolute;
  width: 1254px;
  height: 250px;
  left: 47px;
  top: 1998px;
  border: 2px solid #fff;
  background: #c4c4c4;
  mix-blend-mode: soft-light;
`;

export const Square = styled.div`
  position: absolute;
  width: 610px;
  height: 482px;
  background: #c4c4c4;
  mix-blend-mode: soft-light;
  border: 2px solid #fff;
`;

export const Ellipse = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;
  left: 82px;
  top: 969px;
  border-radius: 50px;
  border: 15px solid #00ff19;
  box-sizing: border-box;
`;

export const Polygon = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;
  left: 727px;
  top: 969px;
  border-radius: 0px;

  border: 15px solid #ff0000;
  box-sizing: border-box;
`;

export const H2 = styled.h2`
  position: absolute;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 0px;
  /* identical to box height, or 0% */

  text-align: center;

  color: #fffafa;
`;

export const H3 = styled.h3`
  position: absolute;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 100px;
  /* identical to box height, or 250% */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const H4 = styled.h4`
  position: absolute;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 41px;
`;

export const LongArrow = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  transform: rotate(90deg);
`;

export const ArticleHeading = styled.p`
  position: absolute;
  width: 541px;
  height: 123px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 41px;
  text-transform: capitalize;

  color: #ffffff;
`;

export const ArticleDescription = styled.p`
  position: absolute;
  width: 552px;
  height: 140px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-transform: lowercase;

  color: #8e8484;
`;

export const MediumLogo = styled.img`
  position: absolute;
  width: 65px;
  height: 65px;
`;

export const RomLink = styled.p`
  position: absolute;
  width: 269px;
  height: 35px;
  top: 1755px;
  transition-duration: 0.4s;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-decoration-line: underline;
  text-transform: capitalize;

  color: #ffffff;
  :hover {
    color: #ffdd1f;
  }
`;

export const Devider = styled.div`
  position: absolute;
  width: 518px;
  height: 1px;
  background-color: #8e8484;
`;

export const DateStamp = styled.p`
  position: absolute;
  width: 180px;
  height: 35px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  text-transform: capitalize;

  color: #8e8484;
`;

export const Title = styled.p`
  position: absolute;
  width: 649px;
  height: 41px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 41px;
  /* identical to box height */

  text-transform: uppercase;

  color: #ffffff;
`;

export const BrandLogo = styled.img`
  position: absolute;
  width: 153px;
  height: 51px;
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
