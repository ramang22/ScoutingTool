import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Logo from './logo.svg'
import FormApp from './Components/form'
import OpggApp from './Components/opgg'
import Card from 'react-bootstrap/Card'


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




          <div className="row">
            <div className="col"></div>
            <div className="col">

              <Card
                bg="dark"
                text="white"
                border="light">
                <Card.Body>
                  <Card.Title>Welcome!</Card.Title>
                  <Card.Text>
                    Select input style for scouting!
                      </Card.Text>
                  <div className="container" onChange={this.handleChange}>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label" >Normal</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" >OP.GG</label>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div>
          {this.state.formRender ?
            (
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <Card
                    style={{ padding: '10px' }}>
                    <FormApp />
                  </Card>
                </div>
                <div className="col"></div>
              </div>


            ) : (
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <Card
                    style={{ padding: '10px' }}>
                    <OpggApp />
                  </Card>
                </div>
                <div className="col"></div>
              </div>
            )}
        </div>

        <Navbar fixed="bottom" style={{ marginTop: '20px' }} bg="dark" variant="dark"  >
          <Navbar.Text>
            opensource at @<a href="https://github.com/ramang22/ScoutingTool">ramang22/ScoutingTool</a>
          </Navbar.Text>

        </Navbar>

      </div>


    );
  }
}

export default App;
