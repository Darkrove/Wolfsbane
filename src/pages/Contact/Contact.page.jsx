import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import $ from "jquery";
import { Heading } from "../Ui/Ui.styles";
import {
  Title,
  Error,
  FormTextField,
  FormInputField,
  Button,
  SocialContainer,
  SocialTitle,
  ContactLogoContainer,
  ContactLink
} from "./Contact.styles";

import { SpotLight } from "../Home/Home.styles";
import spotblue from "../../image/spot1.svg";
import linkedinlogo from "../../image/linkedin_100px.png";
import facebooklogo from "../../image/facebook_100px.png";
import maillogo from "../../image/mail_52px.png";

function Contact(props) {
  const NAME = React.useRef(null);
  const MAIL = React.useRef(null);
  const NUMBER = React.useRef(null);
  const TEXT = React.useRef(null);
  const validEmailRegex = RegExp(
    /^([a-zA-Z0-9]+.)?[a-zA-z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  );
  const validNameRegex = RegExp(/^[a-zA-Z ]+$/);
  const validNumberRegex = RegExp(/^([+]\d{2})?(-)?\d{10}$/);

  function sendEmail(e) {
    e.preventDefault();
    const newLocal = NAME.current.value === "";
    const newLocal_1 = MAIL.current.value === "";
    const newLocal_2 = NUMBER.current.value === "";
    const newLocal_3 = TEXT.current.value === "";

    if (newLocal && newLocal_1 && newLocal_2 && newLocal_3) {
      $(function () {
        $(".error").text("please fill all the details*");
        $(".name").css("border-color", "red");
        $(".mail").css("border-color", "red");
        $(".contact").css("border-color", "red");
        $(".message").css("border-color", "red");
        setTimeout(function () {
          $(".error").text(null);
        }, 5000);
        setTimeout(function () {
          $(".name").css("border-color", "white");
        }, 5000);
        setTimeout(function () {
          $(".mail").css("border-color", "white");
        }, 5000);
        setTimeout(function () {
          $(".contact").css("border-color", "white");
        }, 5000);
        setTimeout(function () {
          $(".message").css("border-color", "white");
        }, 5000);
      });
    } else if (!validNameRegex.test(NAME.current.value)) {
      $(function () {
        $(".error").text("invalid name*");
        $(".name")
          .val(null)
          .css("border-color", "red")
          .attr("placeholder", "Your name");
        setTimeout(function () {
          $(".error").text(null);
        }, 5000);
        setTimeout(function () {
          $(".name").css("border-color", "white");
        }, 5000);
      });
    } else if (!validEmailRegex.test(MAIL.current.value)) {
      $(function () {
        $(".error").text("invalid mail*");
        $(".mail")
          .val(null)
          .css("border-color", "red")
          .attr("placeholder", "Your mail");
        setTimeout(function () {
          $(".error").text(null);
        }, 5000);
        setTimeout(function () {
          $(".mail").css("border-color", "white");
        }, 5000);
      });
    } else if (!validNumberRegex.test(NUMBER.current.value)) {
      $(function () {
        $(".error").text("invalid number*");
        $(".contact")
          .val(null)
          .css("border-color", "red")
          .attr("placeholder", "Your number");
        setTimeout(function () {
          $(".error").text(null);
        }, 5000);
        setTimeout(function () {
          $(".contact").css("border-color", "white");
        }, 5000);
      });
    } else if (newLocal_3) {
      $(function () {
        $(".error").text("please enter your message*");
        $(".message")
          .val(null)
          .css("border-color", "red")
          .attr("placeholder", "Your message");
        setTimeout(function () {
          $(".error").text(null);
        }, 5000);
        setTimeout(function () {
          $(".message").css("border-color", "white");
        }, 5000);
      });
    } else {
      $(function () {
        $(".error")
          .text("your request sent successfully!")
          .css("color", "white");
        $(".name")
          .css("border-color", "white")
          .attr("placeholder", "Your name");
        $(".mail")
          .css("border-color", "white")
          .attr("placeholder", "Your mail");
        $(".contact")
          .css("border-color", "white")
          .attr("placeholder", "Your number");
        $(".message")
          .css("border-color", "white")
          .attr("placeholder", "Your message");
        setTimeout(function () {
          $(".error").text(null);
        }, 5000);
        setTimeout(function () {
          $(".error").css("color", "red");
        }, 5000);
      });
      emailjs
        .sendForm(
          "gmail24",
          "template_mf9vdgj",
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
  function resetForm(e) {
    e.preventDefault();
    $(".error").text("");
    $(".name")
      .val(null)
      .css("border-color", "white")
      .attr("placeholder", "Your name");
    $(".mail")
      .val(null)
      .css("border-color", "white")
      .attr("placeholder", "Your mail");
    $(".contact")
      .val(null)
      .css("border-color", "white")
      .attr("placeholder", "Your number");
    $(".message")
      .val(null)
      .css("border-color", "white")
      .attr("placeholder", "Your message");
  }
  return (
    <div className="contactpage">
      <SpotLight className="contactspotblue" src={spotblue} />
      <Heading style={{ left: "111px", top: "133px" }}>Contact us</Heading>
      <Title>Send us your email and we'll contact you within 24 hours</Title>
      <form className="contact-form" onSubmit={sendEmail}>
        <Error className="error" />
        <FormInputField
          style={{
            width: "240px",
            left: "111px",
            top: "309px",
            color: "#fff",
            height: "60px"
          }}
          ref={NAME}
          type="text"
          className="name"
          placeholder="Your name"
          name="user_name"
        />
        <FormInputField
          style={{
            width: "511px",
            left: "385px",
            top: "309px",
            color: "#fff",
            height: "60px"
          }}
          ref={MAIL}
          type="text"
          className="mail"
          placeholder="Your mail"
          name="user_email"
        />
        <FormInputField
          style={{
            width: "785px",
            left: "111px",
            top: "384px",
            color: "#fff",
            height: "60px"
          }}
          ref={NUMBER}
          type="text"
          className="contact"
          placeholder="Your number"
          name="user_contact"
        />
        <FormTextField
          style={{
            width: "785px",
            left: "111px",
            top: "459px",
            color: "#fff",
            height: "100px"
          }}
          ref={TEXT}
          type="text"
          className="message"
          placeholder="Your message"
          name="user_text"
        />
        <Button type="submit" style={{ left: "111px", top: "592px" }}>
          SEND
        </Button>
        <Button
          type="reset"
          onClick={resetForm}
          style={{ left: "346px", top: "592px" }}
        >
          RESET
        </Button>
      </form>
      <SocialContainer>
        <SocialTitle>More ways to stay in touch</SocialTitle>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/edith-juni-04273819/"
        >
          <ContactLogoContainer style={{ top: "90px" }} src={linkedinlogo} />
          <ContactLink style={{ top: "93px" }}>Linkedin</ContactLink>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/edith.juni/"
        >
          <ContactLogoContainer style={{ top: "140px" }} src={facebooklogo} />
          <ContactLink style={{ top: "143px" }}>Facebook</ContactLink>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto: wolfsbanepro@gmail.com"
        >
          <ContactLogoContainer style={{ top: "190px" }} src={maillogo} />
          <ContactLink style={{ top: "193px" }}>
            wolfsbanepro@gmail.com
          </ContactLink>
        </a>
      </SocialContainer>
    </div>
  );
}

export default Contact;
