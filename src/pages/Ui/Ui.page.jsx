import React from 'react';
import "./Ui.css";
import { useHistory } from "react-router-dom";
import {LongArrow,IntroBigPannel,SpotLight} from "../Home/Home.styles";
import intro from "../../image/intro-ui.png";
import {
    H1,
    H2,
    WorkContainer,
    ShowCasePanel,
    BigContainer,
    SmallContainer,
    Button,
    Heading,
    Title,
    Description
} from "./Ui.styles";
import {
    Ellipse,
    Polygon,
    Rectangle,
    Typo
} from "../About/About.styles";

import faarrow from "../../image/long_arrow.png";
import spotblue from "../../image/spot1.svg";
import spotyellow from "../../image/spot3.svg";
import fbclone from "../../image/showcase/fbclone.jpg";
import instaclone from "../../image/showcase/instaclone.jpg";
import foodapp from "../../image/showcase/foodapp.jpg";
import xbox from "../../image/showcase/xbox.jpg";
import natgeo from "../../image/showcase/natgeo.jpg";

import wildhuntz from "../../image/showcase/wildhuntz.jpg";
import anexity from "../../image/showcase/anexity.jpg";
import lastofus from "../../image/showcase/lastofus.jpg";
import octopus from "../../image/showcase/octopus.jpg";
import tour from "../../image/showcase/tour.jpg";

import chair from "../../image/showcase/chairbooking.jpg";
import mcd from "../../image/showcase/mcd.jpg";
import uber from "../../image/showcase/uber.jpg";
import amazonjungle from "../../image/showcase/amazonjungle.jpg";
import car from "../../image/showcase/cardetail.jpg";

import starbucks from "../../image/showcase/starbucks.jpg";
import wildlife from "../../image/showcase/wildlife.jpg";
import portfolio from "../../image/showcase/portfolio.jpg";
import pepsi from "../../image/showcase/pepsi.jpg";
import shopping from "../../image/showcase/shopping.jpg";

function Ui() {
    const history = useHistory();
      
    function handleClick() {
        history.push("/contact");
    }
    return(
            <div className="uipage">
                <SpotLight className="uispotyellow" src={spotyellow}/>
                <SpotLight className="uispotblue" src={spotblue}/>
                <SpotLight className="uispotyellow1" src={spotyellow}/>
                <H1>
                    8 years in UX/UI
                    with Big Projects
                </H1>
                <IntroBigPannel style={{top: '126px'}} src={intro}/>
                <Ellipse/>
                <Typo style={{left: '170px'}}>
                    We do projects as a part
                    of your IT-company
                </Typo>
                <Polygon/>
                <Typo style={{left: '551px'}}>
                    We know what clients
                    need and can liaise
                </Typo>
                <Rectangle/>    
                <Typo style={{left: '935px'}}>
                    We know exactly
                    how to design big products
                </Typo>
                <Button onClick={handleClick}>Schedule a call</Button>
                <p className="btitle">Or scroll further, no pressure</p>
                <LongArrow className="arrow4" src={faarrow} style={{transform: 'rotate(180deg)'}}/>
                <div className="work">
                    <H2 style={{top: '1265px'}}>How we work</H2>
                    <div className="row1">
                        <WorkContainer className="container1"/>
                        <Heading style={{left: '147px',top: '1397px'}}>1. Analytics</Heading>
                        <Title style={{left: '147px',top: '1551px'}} >(1.1) Data Consolidation</Title>
                        <Description style={{left: '147px',top: '1626px',height: '138px'}} >
                            To learn everything about the 
                            product we explore the current 
                            version of your app and talk to 
                            your experts. Great results stem 
                            from an open dialogue between 
                            our team.
                        </Description>
                        <Title style={{left: '520px',top: '1551px'}} >(1.2) Wireframing</Title>
                        <Description style={{left: '520px',top: '1626px',height: '117.34px'}}>
                            All gatherings transform into 
                            sketches of the future graphic
                            interface. You get a clear 
                            overview of the concept.
                        </Description>
                        <Title style={{left: '870px',top: '1551px'}} >(1.3) User Story Mapping</Title>
                        <Description style={{left: '870px',top: '1626px',height: '161px'}} >
                            Researching key user groups 
                            and their pain points. Discovering
                            how our app will get them 
                            corrected.
                        </Description>
                    </div>
                    <div className="row2">
                        <WorkContainer className="container2"/>
                        <Heading style={{left: '147px',top: '1870px'}}>2. Design</Heading>
                        <Title style={{left: '147px',top: '2014px'}} >(2.1) Prototyping</Title>
                        <Description style={{left: '147px',top: '2089px',height: '184px'}} >
                            We bring mockups to life 
                            using Figma design and 
                            prototyping capabilities. 
                            Feel free to delve into brand 
                            new UI, inspect its features, 
                            and leave your questions.
                        </Description>
                        <Title style={{left: '520px',top: '2014px'}} >(2.2) Early Usability Testing</Title>
                        <Description style={{left: '520px',top: '2089px',height: '184px'}} >
                            A specially formed testing 
                            group performs a range of 
                            tasks in the app, evaluating 
                            time to complete them. Any 
                            problems found are analyzed 
                            right away. The testing process 
                            is recorded for your convenience.
                        </Description>
                        <Title style={{left: '870px',top: '2014px'}} >(2.3) Documentation</Title>
                        <Description style={{left: '870px',top: '2089px',height: '184px'}} >
                            Describing every element 
                            of the design. From 
                            UI-components in each 
                            possible state to the logic 
                            of a color scheme. Videos f
                            or complicated animations 
                            included.
                        </Description>
                    </div>
                    <div className="row3">
                        <WorkContainer className="container3"/>
                        <Heading style={{left: '147px',top: '2374px'}}>3. Аccompaniment</Heading>
                        <Title style={{left: '147px',top: '2508px'}} >(3.1) Author’s Supervision</Title>
                        <Description style={{left: '147px',top: '2551px',height: '161px'}} >
                            We ensure that your design solution is implemented 
                            without any deficiency. Just as it looked in the design.
                        </Description>
                        <Title style={{left: '870px',top: '2508px'}} >(3.2) UX Research</Title>
                        <Description style={{left: '870px',top: '2551px',height: '161px'}} >
                            Tracking usability over time to provide users.
                            with a seamless experience.
                        </Description>
                    </div>
                </div>
                <div id="showcase">
                    <H2 style={{top: '2757px'}}>Our recent work</H2>
                    <ShowCasePanel/>
                    <div className="row1">
                        <BigContainer className="xbox" src={xbox}/>
                        <SmallContainer className="fbclone" src={fbclone}/>
                        <SmallContainer className="instaclone" src={instaclone}/>
                        <SmallContainer className="foodapp" src={foodapp}/>
                        <SmallContainer className="natgeo" src={natgeo}/>
                    </div>
                    <div className="row2">
                        <BigContainer className="wildhuntz" src={wildhuntz}/>
                        <SmallContainer className="anexity" src={anexity}/>
                        <SmallContainer className="lastofus" src={lastofus}/>
                        <SmallContainer className="octopus" src={octopus}/>
                        <SmallContainer className="tour" src={tour}/>
                    </div>
                    <div className="row3">
                        <BigContainer className="chair" src={chair}/>
                        <SmallContainer className="amazon" src={amazonjungle}/>
                        <SmallContainer className="uber" src={uber}/>
                        <SmallContainer className="mcd" src={mcd}/>
                        <SmallContainer className="car" src={car}/>
                    </div>
                    <div className="row4">
                        <BigContainer className="starbucks" src={starbucks}/>
                        <SmallContainer className="pepsi" src={pepsi}/>
                        <SmallContainer className="shopping" src={shopping}/>
                        <SmallContainer className="wildlife" src={wildlife}/>
                        <SmallContainer className="portfolio" src={portfolio}/>
                    </div>

                </div>

            </div>
        );
    }


export default Ui;