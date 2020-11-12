import React from 'react';
import "./Blog.css";
import {BlogContainer,ImageContainer} from "./Blog.styles";
import {
    LongArrow,
    ArticleHeading,
    ArticleDescription,
    MediumLogo,
    RomLink,Devider,
    DateStamp,
    SpotLight
} from "../Home/Home.styles";

import spotpurple from "../../image/spot2.svg";
import spotblue from "../../image/spot1.svg";
import spotyellow from "../../image/spot3.svg";
import img1 from "../../image/img1.png";
import img2 from "../../image/img2.png";
import img3 from "../../image/img3.png";
import img4 from "../../image/maxresdefault.jpg";

import faarrow from "../../image/long_arrow.png";
import mediumlogo from "../../image/medium_new_100px.png";
import ytlogo from "../../image/youtube_64px.png";

const article1 = "https://medium.com/@samaralishaikh212/21-methods-of-ux-research-when-to-use-which-961c3af4b880";
const article2 =  "https://medium.com/@samaralishaikh212/standardization-of-color-schemes-through-the-eyes-of-a-programmer-6d35429598e5?source=friends_link&sk=e23d7c7e83940ee3a4dcb223b6dd8b0e";
const article3 = "https://medium.com/@samaralishaikh212/eight-things-you-need-to-know-about-design-systems-b6768e520f20";
const article4 = "https://youtu.be/fAK9NxsR3es";

function Blog() {
    return(
        <div className="blogpage">
            <SpotLight className="blogspotyellow" src={spotyellow}/>
            <SpotLight className="blogspotblue" src={spotblue}/>
            <SpotLight className="blogspotpurple" src={spotpurple}/>
            <div className="row1">
                <BlogContainer style={{top:'233px',left:'100px'}}></BlogContainer>
                <ImageContainer src={img1} style={{top:"278px"}}/>
                <ArticleHeading style={{top:'269px',left:'686px'}}>
                    21 methods of UX research: 
                    when to use which
                </ArticleHeading>
                <ArticleDescription style={{top:'426px',left:'686px'}}>
                    Like it or not, there’s no way of getting
                    around the topic of UX testing when 
                    creating a digital product. Any specialist 
                    who gives even…
                </ArticleDescription>
                <a rel="noopener noreferrer" target="_blank" href={article1}>
                    <MediumLogo src={mediumlogo} style={{top:'596px',left:'686px'}}/>
                    <RomLink style={{top:'611px',left:'764px'}}>read on medium</RomLink>
                    <LongArrow style={{top:'608px',left:'1039px'}} src={faarrow}/>
                </a>
                <Devider style={{top:'675px',left:'681px'}}/>
                <DateStamp style={{top:'692px',left:'1064px'}}>Aug 5, 2020</DateStamp>
            </div>
            <div className="row2">
                <BlogContainer style={{top:'791px',left:'100px'}}></BlogContainer>
                <ImageContainer src={img2} style={{top:"836px"}}/>
                <ArticleHeading style={{top:'827px',left:'686px'}}>
                    Standardization of color 
                    schemes through the eyes 
                    of a programmer
                </ArticleHeading>
                <ArticleDescription style={{top:'977px',left:'686px'}}>
                    Let’s try to figure out how designers use
                    colors in UI and how the whole thing 
                    can be standardized without restricting 
                    designers
                </ArticleDescription>
                <a rel="noopener noreferrer" target="_blank" href={article2}>
                    <MediumLogo src={mediumlogo} style={{top:'1150px',left:'686px'}}/>
                    <RomLink style={{top:"1169px",left:'764px'}}>read on medium</RomLink>
                    <LongArrow style={{top:'1163px',left:'1039px'}} src={faarrow}/>
                </a>
                <Devider style={{top:'1233px',left:'681px'}}/>
                <DateStamp style={{top:'1250px',left:'1064px'}}>May 24, 2020</DateStamp>
            </div>
            <div className="row3">
                <BlogContainer style={{top:'1349px',left:'100px'}}></BlogContainer>
                <ImageContainer src={img3} style={{top:"1394px"}}/>
                <ArticleHeading style={{top:'1385px',left:'686px'}}>
                    Eight Things You Need To Know 
                    About Design Systems
                </ArticleHeading>
                <ArticleDescription style={{top:'1542px',left:'686px'}}>
                    Bridging design and engineering has been 
                    an intense interest of mine since 
                    transitioning to design from software 
                    engineering, so I was ..
                </ArticleDescription>
                <a rel="noopener noreferrer" target="_blank" href={article3}>
                    <MediumLogo src={mediumlogo} style={{top:'1721px',left:'686px'}}/>
                    <RomLink style={{top:"1727px",left:'764px'}}>read on medium</RomLink>
                    <LongArrow style={{top:'1721px',left:'1039px'}} src={faarrow}/>
                </a>
                <Devider style={{top:'1791px',left:'681px'}}/>
                <DateStamp style={{top:'1808px',left:'1064px'}}>Feb 30, 2020</DateStamp>
            </div>
            <div className="row4">
                <BlogContainer style={{top:'1907px',left:'100px'}}></BlogContainer>
                <ImageContainer src={img4} style={{top:"1942px"}}/>
                <ArticleHeading style={{top:'1943px',left:'686px'}}>
                    Best design resource websites 
                    every designer should bookmark
                </ArticleHeading>
                <ArticleDescription style={{top:'2094px',left:'686px'}}>
                    These are the best design resource websites 
                    every designer should bookmark. There is 
                    a heap of great graphics ..
                </ArticleDescription>
                <a rel="noopener noreferrer" target="_blank" href={article4}>
                    <MediumLogo src={ytlogo} style={{top:'2270px',left:'686px'}}/>
                    <RomLink style={{top:"2285px",left:'764px',width:'30%'}}>Watch on YouTube</RomLink>
                    <LongArrow style={{top:'2279px',left:'79%'}} src={faarrow}/>
                </a>
                <Devider style={{top:'2349px',left:'681px'}}/>
                <DateStamp style={{top:'2366px',left:'1064px'}}>Jan 15, 2020</DateStamp>
            </div>
            
        </div>
    );
}
export default Blog;