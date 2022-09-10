
import logo from './logo.svg';
import './app.css';
import Header from './shared/header';
import { Routes, Route, Link } from "react-router-dom";
import Overview from './overview/overview';
import Portfolio from './portfolio/portfolio';
import PortfolioSection from './portfolio/portfolio-section';
import About from './about/about';
import React from 'react';
import Modal, { IModalProps, Modals } from './modals/modal';
import 'animate.css';
import 'hamburgers/dist/hamburgers.css'

interface IAppState {
  modal: IModalProps | undefined;
}
class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      modal: undefined
    }
  }

  openModal = (type: Modals, props?: any) => {
    console.log("OPEN MODAL");
    this.setState({
      modal: {
        type, props
      }
    })
  }

  closeModal = () => {
    this.setState({
      modal: undefined
    })
  }

  render() {
    let modal;
    if(this.state.modal) {
      modal = <Modal {...this.state.modal} onClose={this.closeModal}/>
    }
    return (
      <div className="App">
        <Header/>
        <div className='content'>
          <Routes>
          <Route path='/' element={<Overview openModal={this.openModal}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='portfolio/:sectionId' element={<PortfolioSection openModal={this.openModal}/>}/>
          </Routes>
        </div>
        {modal}
      </div>
    );
  }
}

export default App;
