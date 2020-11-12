import React from "react";
import {withRouter} from 'react-router-dom'
import $ from "jquery";
import emailjs from "emailjs-com";
import {
    Form,
    Error,
    FormImg,
    Title,
    SubTitle,
    FormInputField,
    Button,RectAngle,
    RectEnd,CopyRightLogo,CopyRight,
    LogoContainer,SocialContainer,
    SocialTitle,
    ContactLogoContainer,
    SocialLogoContainer,
    ContactLink,
    SocialLink,
    NavContainer,
    NavLink 
} from "./Footer.styles";
import formimg from "../../image/light.3b.png";
import "./Footer.css";
import copyright from "../../image/copyright_60px.png";
import wolfsbanelogo from "../../image/logo.png";
import registered from "../../image/registered_60px.png";
import jtc from "../../image/logo-jtc.svg";
import linkedinlogo from "../../image/linkedin_100px.png";
import facebooklogo from "../../image/facebook_100px.png";
import maillogo from "../../image/mail_52px.png";
import behancelogo from "../../image/behance_64px.png";
import mediumlogo from "../../image/medium_new_100px.png";
import githublogo from "../../image/github_64px.png";
import instagramlogo from "../../image/instagram_52px.png";



function Footer(props) {

    const E1 = React.useRef(null);
    const validEmailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

    function sendEmail(e) {
        e.preventDefault()
        if(E1.current.value === ''){
            $(function(){
                $(".errors").text("please enter your mail id*").css("color", "red");
                setTimeout(function () {
                    $(".errors").text(null);
                }, 2000);
                $(".mails").val(null).css("border-color", "red").attr("placeholder", "Your mail");
                setTimeout(function () {
                    $(".mails").css("border-color", "white")
                }, 2000);
            });
        }else if(!(validEmailRegex.test(E1.current.value))){
            $(function(){
                $(".errors").text("invalid mail id*").css("color", "red");
                setTimeout(function () {
                    $(".errors").text(null);
                }, 2000);
                $(".mails").val(null).css("border-color", "red").attr("placeholder", "Your mail");
                setTimeout(function () {
                    $(".mails").css("border-color", "white")
                }, 2000);
            });
        }else{
            $(function(){
                $(".errors").text("your request sent successfully!").css("color", "white");
                setTimeout(function () {
                    $(".errors").text(null)
                  }, 5000);
                  setTimeout(function () {
                    $(".errors").css("color","red")
                  }, 5000);
                $(".mails").css("border-color", "white").attr("placeholder", "Your mail");
            });
            
            emailjs
            .sendForm(
                "gmail24",
                "template_rp07ovj",
                e.target,
                "user_f39NQtmJ2vVRt7JNWeX3w"
            )
            .then(
                (result) => {
                console.log(result.text);
                },
                (error) => {
                console.log(error.text);
                }
            );
            e.target.reset();
        }
      }    

    return (
        <div className="footer">         
            <RectAngle/>
            <RectEnd/>
            <div className="form">
                <Form >
                    <FormImg src={formimg}></FormImg>
                    <Title>
                        Let’s discuss your 
                        project!
                    </Title>
                    <SubTitle>
                        Leave your email and we’ll contact you 
                        within 24 hours to schedule a call
                    </SubTitle>
                    <form className="sus-form" onSubmit={sendEmail}>
                        <Error className="errors"/>
                        <FormInputField style={{width: '355px',left: '75px',top: '243px'}} className="mails" type="text" name="email" ref={E1} placeholder="Your mail"/>
                        <Button type="submit" value="Submit">send</Button>
                    </form>
                </Form>
            </div>
            <div className="navigation socialmedia">
                <NavContainer>
                    <NavLink to="/" id='menu1'>
                        Home
                    </NavLink>
                    <NavLink to="/ui" id='menu2'>
                        Ui/Ux Design
                    </NavLink>
                    <NavLink to="/blog" id='menu3'>
                        Blog
                    </NavLink>
                    <NavLink to="/career" id='menu4'>
                        Career
                    </NavLink>
                    <NavLink to="/about" id='menu5'>
                        About us
                    </NavLink>
                    <NavLink to="/contact" id='menu6'>
                        Contact
                    </NavLink>
                </NavContainer>
                <SocialContainer>
                    <SocialTitle>Contact us</SocialTitle>
                    <SocialTitle style={{left:'250px'}}>Follow us</SocialTitle>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/edith-juni-04273819/">
                        <ContactLogoContainer style={{top:'50px'}} src={linkedinlogo}/>
                        <ContactLink style={{top:'53px'}}>Linkedin</ContactLink> 
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://m.facebook.com/edith.juni">
                        <ContactLogoContainer style={{top:'100px'}} src={facebooklogo}/>
                        <ContactLink style={{top:'103px'}}>Facebook</ContactLink> 
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="mailto: wolfsbanepro@gmail.com">
                        <ContactLogoContainer style={{top:'150px'}} src={maillogo}/>
                        <ContactLink style={{top:'153px'}}>wolfsbanepro@gmail.com</ContactLink> 
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.behance.net/sajjadshaikh1">
                        <SocialLogoContainer style={{top:'50px'}} src={behancelogo}/>
                        <SocialLink style={{top:'53px'}}>Behance</SocialLink>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@samaralishaikh212">
                        <SocialLogoContainer style={{top:'100px'}} src={mediumlogo}/>
                        <SocialLink style={{top:'103px'}}>Medium</SocialLink>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/AbispaAsh">
                        <SocialLogoContainer style={{top:'150px'}} src={githublogo}/>
                        <SocialLink style={{top:'153px'}}>Github</SocialLink>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/edithjuni_/">
                        <SocialLogoContainer style={{top:'200px'}} src={instagramlogo}/>
                        <SocialLink style={{top:'203px'}}>Instagram</SocialLink>
                    </a>
                </SocialContainer>
            </div>
            <div className="copyrightSection">
                <RectEnd/>
                <CopyRightLogo src={copyright}></CopyRightLogo>
                <CopyRight>
                    My grandma is a witch. She is going 
                    to curse every copyright violator
                </CopyRight>
                <LogoContainer src={wolfsbanelogo}/>
                <p className="wolf">Wolfsbane</p>
                <img alt="reg logo" className="reg" src={registered}></img>
                <img alt="copy logo" className="jtclogo" src={jtc}></img>
                <p className="fam" >family</p>
            </div>
        </div>
    );
    }
export default withRouter(Footer);
