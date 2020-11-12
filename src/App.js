import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home.page';
import Blog from './pages/Blog/Blog.page';
import Ui from './pages/Ui/Ui.page';
import About from './pages/About/About.page';
import Contact from './pages/Contact/Contact.page';
import Career from "./pages/Career/Career.page";
import ScrollToTop from "./components/Styling/ScrollToTop.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <ScrollToTop/>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/ui" component={Ui}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/career" component={Career}></Route>
                    <Redirect to="/"></Redirect>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;