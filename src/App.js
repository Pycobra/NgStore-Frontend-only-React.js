import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage.component.jsx';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import './App.css'
import CustomButton from './components/custom-button/custom-button.component.jsx';
import { changeTemplateTopPosition } from './redux/images_url/images_url.action.js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import SignIn from './components/sign-in/sign-in.component.jsx';
import SignUp from './components/sign-up/sign-up.component.jsx';
import SingleCollection from './components/single-collection/single-collection.components.jsx';
// import { ContainerStyles } from './App.styled-component.js';




class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    const headerHeight = document.querySelector('.header').clientHeight
    document.querySelector('#container').setAttribute('style', `top:${headerHeight}px`)
  }
 CancelSlideModal = (e) => {
  e.target.closest('template').setAttribute('style', 'display:none')
 }
HandleWindowClick = window.onclick = (event) => {
      if (event.target === document.querySelector('template#sign-up')) {
          document.querySelector('template#sign-up').setAttribute('style', 'display:none;')
      }
      if (event.target === document.querySelector('template#single-collection')) {
          document.querySelector('template#single-collection').setAttribute('style', 'display:none;')
      }  
 }

  render(){
    return (
      <div className='app'>
      <Router>
          <Header cancelSlideModal={this.CancelSlideModal}/>
        
          <section id='container'>
            <Routes>
                <Route path='/*' element={<LandingPage />} /> 
                <Route path='/accounts/signin' element={<SignIn />} /> 
            </Routes>
            <Footer />
          </section>
      </Router>
      <SingleCollection cancelSlideModal={this.CancelSlideModal} />
      <SignUp cancelSlideModal={this.CancelSlideModal} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  templateTopPosition: (pixel) => dispatch(changeTemplateTopPosition(pixel))
})
export default connect(null, mapDispatchToProps)(App);


//  ~ === TILDAE