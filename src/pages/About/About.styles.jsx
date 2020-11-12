import styled from "styled-components";
import "../../fonts/Raleway-VariableFont_wght.ttf";

export const H1 = styled.h1`
  position: absolute;
  width: 691px;
  height: 200px;
  left: 317px;
  top: 503px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 100px;
  /* or 143% */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const Ellipse = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;
  left: 237px;
  top: 771px;
  border-radius: 2% 50%;

  border: 15px solid #ffdd1f;
  box-sizing: border-box;
  transition: all 3s;
  transition-timing: ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;

export const Polygon = styled.div`
  position: absolute;
  height: 70px;
  width: 70px;
  left: 623px;
  top: 771px;
  border-radius: 0px;

  border: 15px solid #19c7f7;
  box-sizing: border-box;
  transform: rotate(45deg);
  transition: all 3s;
  transition-timing: ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;
  left: 1009px;
  top: 771px;
  border-radius: 25%;

  border: 15px solid #ff0000;
  box-sizing: border-box;
  transition: all 3s;
  transition-timing: ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;

export const Typo = styled.p`
  position: absolute;
  width: 223px;
  height: 46px;

  top: 866px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
`;

export const Title = styled.p`
  position: absolute;
  width: 263px;
  height: 65px;
  left: 610px;
  top: 1104px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 65px;
  /* identical to box height */

  color: #ffffff;
`;

export const Description = styled.p`
  position: absolute;
  width: 593px;
  height: 624px;
  left: 610px;
  top: 1176px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;

  color: #ffffff;
`;

export const Signature = styled.p`
  position: absolute;
  width: 79px;
  height: 29px;
  left: 610px;
  top: 1825px;

  font-family: Handlee;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 29px;
  text-decoration-line: underline;

  color: #ffffff;
`;

export const FounderStamp = styled.p`
  position: absolute;
  width: 181px;
  height: 18px;
  left: 610px;
  top: 1854px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #3f3939;
`;

export const Rect = styled.div`
  position: absolute;
  width: 299px;
  height: 169px;
  left: 185px;
  top: 1444px;
  border: 2px solid #fff;
  background: #c4c4c4;
  mix-blend-mode: soft-light;
`;

export const Profile = styled.img`
  position: absolute;
  width: 270px;
  height: 270px;
  left: 201px;
  top: 1114px;
  border-radius: 50%;
`;
