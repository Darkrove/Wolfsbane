import React from 'react'
import "./Career.css"
import {IntroBigPannel,SpotLight} from "../Home/Home.styles";
import {Button} from "../Contact/Contact.styles";
import {H1,Typography,Heading} from "./Career.styles";
import intro from "../../image/intro-career.png";
import spotblue from "../../image/spot1.svg";
import spotyellow from "../../image/spot3.svg";

function Career() {
    return(
        <div className="careerpage">
            <SpotLight className="careerspotyellow" src={spotyellow}/>
            <SpotLight className="careerspotblue" src={spotblue}/>
            <SpotLight className="careerspotblue1" src={spotblue}/>
            <H1>
                UX/UI Designer
            </H1>
            <IntroBigPannel style={{top: '156px'}} src={intro}/>
            <Typography style={{top: "736px",textAlign: "center"}}>
                The job of a UX/UI Designer is to envision how people experience mobile and web applications and bring 
                that vision to life in a way that feels inspired, refined and simple. You’ll take on complex tasks and 
                transform them into intuitive, accessible and easy-to-use designs. Achieving this goal requires 
                collaboration with clients, other designers, researchers and development teams. At each stage of the 
                design process, that includes creating user flows and wireframes, user interface mockups and 
                prototypes. You will advocate for user needs and ensure that the final product empowers and delights them.
            </Typography>
            <Heading style={{top: '930px',textTransform: 'capitalize'}}>Position Responsibilities:</Heading>
            <Typography style={{top: "991px",textAlign: "left"}}>
                1. Define the user model and user interface for new and existing products<br/>
                2. Research, wireframe, design, and refine user experiences within specified product requirements 
                    and timeframes<br/>
                3. Develop high-level and detailed user stories, mockups, and prototypes to effectively communicate 
                    design ideas<br/>
                4. Analyze the usability of new and existing products and provide suggestions for change<br/>
                5. Be responsible for advocating for users in a fast-paced business climate
            </Typography>
            <Heading style={{top: '1208px',textTransform: 'capitalize'}}>Minimum Qualifications:</Heading>
            <Typography style={{top: "1269px",textAlign: "left"}}>
                1. BA/BS degree in Design (e.g. graphic, interaction, visual communications, product, 
                    industrial), HCI, or a related field or equivalent practical experience<br/>
                2. Portfolio of UX-focused work samples for web and mobile application<br/>
                3. Familiarity with design techniques such as, storyboarding, user research and wireframes<br/>
                4. Proficiency with design tools (Sketch, Illustrator, Adobe Photoshop, After Effects, etc.)<br/>
                5. Understanding of HTML and CSS. (You don't need to write code)
            </Typography>
            <Button style={{left: '562px',top: '1455px'}}>Apply Now</Button>
        </div>
    );
}

export default Career;