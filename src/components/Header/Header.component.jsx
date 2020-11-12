import React from "react";
import { withRouter } from 'react-router-dom';
import {NavLink} from "react-router-dom";

import LogoImg from '../../image/animate1.gif';
import vector from '../../image/logo-jtc.svg';

import {
    HeaderContainer,
    LogoContainer,
    Logo,
    MenuWrapper,
    MenuLeft,
    MenuRight,
    MainMenu,
    MenuItem,
    Branding,
    Vector,
    Title,
} from "./Header.styles";

// import "./Header.css";

function Header() {
    
        return(
            <HeaderContainer>
                    <MenuWrapper>
                        <MenuLeft>
                            <MainMenu>
                                <MenuItem className="uilink"><NavLink activeClassName="menuActive--active" to='/ui'><span>Ui/Ux Design</span></NavLink></MenuItem>
                                <MenuItem className="bloglink"><NavLink activeClassName="menuActive" to='/blog'>Blog</NavLink></MenuItem>
                                <MenuItem className="careerlink"><NavLink activeClassName="menuActive" to='/career'>Career</NavLink></MenuItem>
                            </MainMenu>
                        </MenuLeft>
                    </MenuWrapper>
                    <LogoContainer to='/'>
                        <Logo src={LogoImg}/>
                    </LogoContainer>
                    <MenuWrapper>
                        <MenuRight>
                            <MainMenu>
                                <MenuItem className="homelink"><NavLink activeClassName="menuActive--active" to='/'>Home</NavLink></MenuItem>
                                <MenuItem className="aboutlink"><NavLink activeClassName="menuActive" to='/about'>About us</NavLink></MenuItem>
                                <MenuItem className="contactlink"><NavLink activeClassName="menuActive" to='/contact'>Contact</NavLink></MenuItem>
                            </MainMenu>
                        </MenuRight>
                    </MenuWrapper>
                    <Branding>WOLFSBANE</Branding>
                    <Vector src={vector}/>
                    <Title>family</Title>
            </HeaderContainer>
        );
    }


export default withRouter(Header)
