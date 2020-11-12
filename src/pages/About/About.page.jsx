import React from "react";
import "./About.css";
import {IntroBigPannel,SpotLight} from "../Home/Home.styles";
import {
    H1,
    Ellipse,
    Polygon,
    Rectangle,
    Typo,
    Title,
    Description,
    Signature,
    FounderStamp,
    Rect,
    Profile
} from "./About.styles";
import intro from "../../image/intro-about.png";
import spotpurple from "../../image/spot2.svg";
import spotyellow from "../../image/spot3.svg";
import vector from '../../image/logo-jtc.svg';
import profile from "../../image/aiony.jpg";

function About() {

        return(
            <div className="aboutpage">
                <SpotLight className="abspotyellow" src={spotyellow}/>
                <SpotLight className="abspotpurple" src={spotpurple}/>
                <H1>
                    Your global
                    outsourced team
                </H1>
                <IntroBigPannel style={{top: '126px'}} src={intro}></IntroBigPannel>
                <Ellipse/>
                <Typo style={{left: '170px'}}>
                    12 years in IT
                </Typo>
                <Polygon/>
                <Typo style={{left: '551px'}}>
                    Experience with
                    top companies
                </Typo>
                <Rectangle/>    
                <Typo style={{left: '935px'}}>
                    Professionals only
                </Typo>
                <div className="aboutdescription">
                    <Title>About us</Title>
                    <Description>
                        We are obsessed. The thought that we can do better 
                        haunts our minds. We only work to achieve results that 
                        we can be proud of. We don't sleep at night because 
                        at that time nobody can distract us and we can 
                        concentrate on our work. We refuse to use the word 
                        "impossible" when it comes to the needs of our clients.
                        <br/>
                        <br/>
                        We are free. We do this not because someone pushes us 
                        to, and not because we have to eat, but because we 
                        want to and we just can not imagine our lives without 
                        working.
                        <br/>
                        <br/>
                        We are not afraid to be criticized. It gives us a chance 
                        to become better, to adopt the experience, and to share 
                        our opinion and methods with critics.
                        <br/>
                        <br/>
                        We know what to do. We do not offer you few variations 
                        of the results. We know — you want one — the top of the 
                        line. And we do everything to offer you that desired 
                        outcome.
                        <br/>
                        <br/>
                        We are expensive. We are proud of our work and 
                        appreciate it. And with us — you pay for the result, not 
                        for the process. We sell results only.
                    </Description>
                    <Signature className='sig'>Aiony</Signature>
                    <FounderStamp>founder of Wolfsbane</FounderStamp>
                    <div className="profileback1"></div>
                    <div className="profileback2"></div>
                    <Profile src={profile}></Profile>
                    <Rect></Rect>
                    <img alt="jtc logo" className="jtc" src={vector}></img>
                    <p className="top">
                        We are a part of Just a Team of 
                        Creators. TOP-50 IT company
                        suppliers.
                    </p>
                </div>
            </div>
        );
    }


export default About;
