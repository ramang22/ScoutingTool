import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Logo from './logo.svg'
import FormApp from './Components/form'
import InputGroup from 'react-bootstrap/InputGroup'
interface AppProps {

}

interface ITestState {
  formRender: boolean;
}

export class App extends React.Component<AppProps, ITestState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { formRender: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ formRender: !this.state.formRender });
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
      Scouting Tool - Alpha 0.0.1
    </Navbar.Brand>
        </Navbar>
        <div>



        

          <div className="container" onChange={this.handleChange}>
  <div className="row">
    <div className="col-sm">
    <input type="radio" value="form" name="type" /> Form
    </div>
    <div className="col-sm">
    <input type="radio" value="opgg" name="type" /> multi.op.gg
    </div>
  
  </div>
</div>

            
        
      </div>
          <div>
            {this.state.formRender ?
              (
                  <div className="row">
                    <div className="col"></div>
                    <div className="col"><FormApp /></div>
                    <div className="col"></div>
                  </div>

                
              ) : (
                <div>
                  OP.GG
                </div>
              )}
          </div>
        </div>

      
    );
  }
}

export default App;
