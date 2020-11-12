import React from "react";
import {Link} from "react-router-dom";
import {
    IntroBigPannel,
    IntroSmallPannel,
    SpotLight,
    H1,H2,H3,H4,
    Rectangle,Ellipse,Polygon,Square,
    LongArrow,
    ArticleHeading,
    ArticleDescription,
    MediumLogo,
    RomLink,Devider,
    DateStamp,AchievmentRect,Title,
    BrandLogo
} from "./Home.styles";
import spotpurple from "../../image/spot2.svg";
import spotblue from "../../image/spot1.svg";
import spotyellow from "../../image/spot3.svg";
import introbigimage from "../../image/intro-big-pre.png";
import introsmallimage from "../../image/intro-small-pre.png";
import "./Home.css";
import faarrow from "../../image/long_arrow.png";
import mediumlogo from "../../image/medium_new_100px.png";
import micrologo from "../../image/microsoft.png";
import asuslogo from "../../image/asus.png";
import googlelogo from "../../image/google.png";
import clutchlogo from "../../image/clutch.png";
import reliancelogo from "../../image/rel.png";

const article1 = "https://medium.com/@samaralishaikh212/21-methods-of-ux-research-when-to-use-which-961c3af4b880";
const article2 = "https://medium.com/@samaralishaikh212/standardization-of-color-schemes-through-the-eyes-of-a-programmer-6d35429598e5?source=friends_link&sk=e23d7c7e83940ee3a4dcb223b6dd8b0e";


function Home() {
        return(
            <div className="homepage">
                <SpotLight className="spotpurple" src={spotpurple}/>
                <SpotLight className="spotblue" src={spotblue}/>
                <SpotLight className="spotyellow" src={spotyellow}/>
                <H1>
                    OUTSTAFF DESIGN
                    DEPARTMENT FOR YOUR
                    IT-COMPANY
                </H1>
                <div className="mainframe">
                    <IntroSmallPannel className="img1" src={introsmallimage} />
                    <IntroSmallPannel className="img2" src={introsmallimage} />
                    <IntroSmallPannel className="img3" src={introsmallimage} />
                    <IntroSmallPannel className="img4" src={introsmallimage} />
                    <IntroSmallPannel className="img5" src={introsmallimage} />
                    <IntroBigPannel src={introbigimage} style={{top: '176px'}}/>
                    <IntroSmallPannel className="img6" src={introsmallimage} />
                    <IntroSmallPannel className="img7" src={introsmallimage} />
                    <IntroSmallPannel className="img8" src={introsmallimage} />
                    <IntroSmallPannel className="img9" src={introsmallimage} />
                    <IntroSmallPannel className="img10" src={introsmallimage} />
                </div>
                
                <div className="redirct">
                    <Link to="/ui">
                        <Rectangle className="rect1"/>
                    </Link>
                    <Ellipse />
                    <H3 className="ui">
                        UI Design
                    </H3>
                    <H4 className="desui">
                        8 years of experience with big 
                        projects and top companies
                    </H4>
                </div>
                
                <div className="redirct">
                    <Link to="/career">
                    <Rectangle className="rect2"/>
                    </Link>
                    <Polygon />
                    <H3 className="career">
                        career
                    </H3>
                    <H4 className="desca">
                        The job of ux/ui designer
                    </H4>
                </div>
                <div className="blog">
                    <H2 className="heading">Blog</H2>
                    <Link to="/blog">
                        <H4 className="seehead">See all</H4>
                        <span>
                            <LongArrow className="arrow1" src={faarrow}/>
                        </span>
                    </Link>
                </div>
                <div className="article1">
                    <Square className="rect3"/>
                    <ArticleHeading className="at1">
                        21 methods of UX research: 
                        when to use which
                    </ArticleHeading>
                    <ArticleDescription className="atd1">
                        Like it or not, there’s no way of getting
                        around the topic of UX testing when 
                        creating a digital product. Any specialist 
                        who gives even…
                    </ArticleDescription>
                    <a rel="noopener noreferrer" target="_blank" href={article1}>
                        <MediumLogo className="ml1" src={mediumlogo}/>
                        <RomLink style={{left: '177px'}} className="article1">read on medium</RomLink>
                        <LongArrow className="arrow2" src={faarrow}/>
                    </a>
                    <Devider className="hrline1"/>
                    <DateStamp className="da1">Aug 5, 2020</DateStamp>
                </div>
                <div className="article2">
                    <Square className="rect4"/>
                    <ArticleHeading className="at2">
                        Standardization of color 
                        schemes through the eyes 
                        of a programmer
                    </ArticleHeading>
                    <ArticleDescription className="atd2">
                        Let’s try to figure out how designers use
                        colors in UI and how the whole thing 
                        can be standardized without restricting 
                        designers
                    </ArticleDescription>
                    <a rel="noopener noreferrer" target="_blank" href={article2}>
                        <MediumLogo className="ml2" src={mediumlogo}/>
                        <RomLink style={{left: '821px'}} className="article2">read on medium</RomLink>
                        <LongArrow className="arrow3" src={faarrow}/>
                    </a>
                    <Devider className="hrline2"/>
                    <DateStamp className="da2">May 24, 2020</DateStamp>
                </div>
                <div>
                    <AchievmentRect/>
                    <Title className="title1" >we take pride in our achievments</Title>
                    <Title className="title2" >AND WE AIM FOR HIGHER</Title>
                    <div>
                        <BrandLogo src={googlelogo} className="google"></BrandLogo>
                        <BrandLogo src={asuslogo} className="asus"></BrandLogo>
                        <BrandLogo src={micrologo} className="micro"></BrandLogo>
                        <BrandLogo src={clutchlogo} className="clutch"></BrandLogo>
                        <BrandLogo src={reliancelogo} className="reliance"></BrandLogo>
                    </div>
                </div>

            </div>
        );
    }


export default Home;



