import styled from "styled-components";
import "../../fonts/Raleway-VariableFont_wght.ttf";

export const H1 = styled.h1`
    position: absolute;
    width: 700px;
    height: 200px;
    left: 325px;
    top: 485px;

    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 100px;
    /* or 143% */

    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;

`;

export const H2 = styled.h2`
    position: absolute;
    width: 605px;
    height: 94px;
    left: 100px;

    font-family: Raleway;
    font-style: normal;
    font-weight: 300;
    font-size: 80px;
    line-height: 94px;
    /* identical to box height */

    text-align: left;

    color: #FFFFFF;
`;

export const WorkContainer = styled.div`
    position: absolute;
    width: 1149px;
    background: #C4C4C4;
    mix-blend-mode: soft-light;
    border: 2px solid #fff;
`; 

export const ShowCasePanel = styled.div`
    height: 2353px;
    width: 1184px;
    left: 83px;
    top: 2869px;
    position: absolute;
    background: #C4C4C4;
    mix-blend-mode: soft-light;
    border: 2px solid #fff;
`;

export const BigContainer = styled.img`
    position: absolute;
    width: 542px;
    height: 542px;
    border: 2px solid #fff;
`;

export const SmallContainer = styled.img`
    position: absolute;
    width: 250px;
    height: 250px;
`;

export const Button = styled.button`
    position: absolute;
    width: 278px;
    height: 70px;
    left: 530px;
    top: 1030px;

    background: #C4C4C4;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    color: #FFFFFF;
    border: 0;
    transition-duration: 0.4s;
    cursor: pointer;
    outline:none;
    :hover{
        background: #FFDD1F;
        color: #000;
    }
`;

export const Heading = styled.p`
    position: absolute;
    width: 546px;
    height: 65px;

    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    line-height: 65px;
    /* identical to box height */

    text-align: left;

    color: #FFFFFF;
`;

export const Title = styled.p`
    position: absolute;
    width: 309px;
    height: 29px;

    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 29px;
    text-align: left;

    color: #FFFFFF;
`; 

export const Description = styled.p`
    position: absolute;
    width: 309px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    color: #797171;
`;