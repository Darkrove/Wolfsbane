import styled from "styled-components";
import "../../fonts/Raleway-VariableFont_wght.ttf";

export const Title = styled.p`
  position: absolute;
  width: 876px;
  height: 35px;
  left: 111px;
  top: 244px;

  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: #6d6d6d;
`;

export const Error = styled.p`
  position: absolute;
  width: 876px;
  height: 35px;
  left: 111px;
  top: 274px;

  font-family: Raleway;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: red;
`;

export const FormTextField = styled.textarea`
    position: absolute;
    height: 125px;
    border: 1px solid #fff;
    background: transparent;
    outline:none;
    padding-left: 10px;
    padding: 10px;
    resize: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    {
      font-family: Raleway;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      color: #6D6D6D;
      opacity: 1; /* Firefox */
    }  
`;

export const FormInputField = styled.input`
  position: absolute;
  border: 1px solid #fff;
  background: transparent;
  outline:none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #6D6D6D;
    opacity: 1; /* Firefox */
  }  
`;

export const Button = styled.button`
  position: absolute;

  background: transparent;
  width: 225px;
  height: 56px;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  border: 1px solid #ffdd1f;
  transition-duration: 0.4s;
  cursor: pointer;
  outline: none;
  :hover {
    background: #ffdd1f;
    color: #000;
  }
`;

export const SocialContainer = styled.div`
  position: absolute;
  width: 181px;
  height: 224px;
  left: 1009px;
  top: 244px;
`;

export const SocialTitle = styled.p`
  position: absolute;
  width: 199px;
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
