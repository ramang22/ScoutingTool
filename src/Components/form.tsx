import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import topLogo from '../assets/ranked-positions/Position_Grandmaster-Top.png'
import jungleLogo from '../assets/ranked-positions/Position_Grandmaster-Jungle.png'
import midLogo from '../assets/ranked-positions/Position_Grandmaster-Mid.png'
import adcLogo from '../assets/ranked-positions/Position_Grandmaster-Bot.png'
import suppLogo from '../assets/ranked-positions/Position_Grandmaster-Support.png'


const logoStyle = { maxHeight: '35px', maxWidth: '35px', }
interface AppProps {

}

interface ITestState {
    topRegion: string;
    jungleRegion: string;
    midRegion: string;
    adcRegion: string;
    suppRegion: string;

    topName: string;
    jungleName: string;
    midName: string;
    adcName: string;
    suppName: string;
}

export type SelectCallback = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>,
) => void;

export class FormApp extends React.Component<AppProps, ITestState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {

            topRegion: "Region",
            topName: "",

            jungleRegion: "Region",
            jungleName: "",

            midRegion: "Region",
            midName: "",

            adcRegion: "Region",
            adcName: "",

            suppRegion: "Region",
            suppName: ""
        };
        this.handleSelectTop = this.handleSelectTop.bind(this);
        this.handleSelectJungle = this.handleSelectJungle.bind(this);
        this.handleSelectMid = this.handleSelectMid.bind(this);
        this.handleSelectAdc = this.handleSelectAdc.bind(this);
        this.handleSelectSupp = this.handleSelectSupp.bind(this);
    }

    handleSelectTop(eventKey: any, event: any) {
        console.log(event)
        this.setState({ topRegion: eventKey })
    }

    handleSelectJungle(eventKey: any, event: any) {
        console.log(event)
        this.setState({ jungleRegion: eventKey })
    }

    handleSelectMid(eventKey: any, event: any) {
        console.log(event)
        this.setState({ midRegion: eventKey })
    }

    handleSelectAdc(eventKey: any, event: any) {
        console.log(event)
        this.setState({ adcRegion: eventKey })
    }

    handleSelectSupp(eventKey: any, event: any) {
        console.log(event)
        this.setState({ suppRegion: eventKey })
    }

    render() {
        return (
            <Form className="align-items-center">
                {/* TOP laner */}
                <Form.Group controlId="formGroupEmail">
                    <Image src={topLogo} style={logoStyle} />
                    <Form.Label>TOP</Form.Label>
                    <InputGroup>
                        <FormControl
                            placeholder="TOP laner's username"
                            aria-label="TOP laner's username"
                            aria-describedby="basic-addon2"
                            value={this.state.topName}
                            onChange={e => this.setState({ topName: e.target.value })}
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title={this.state.topRegion}
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item onSelect={this.handleSelectTop} eventKey="EUNE">EUNE</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectTop} eventKey="EUW">EUW</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectTop} eventKey="NA">NA</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Form.Group>
                
                {/* JUNGLER */}
                <Form.Group controlId="formGroupEmail">
                    <Image src={jungleLogo} style={logoStyle} />
                    <Form.Label>Jungle</Form.Label>
                    <InputGroup>
                        <FormControl
                            placeholder="Jungler's username"
                            aria-label="Jungler's username"
                            aria-describedby="basic-addon2"
                            value={this.state.jungleName}
                            onChange={e => this.setState({ jungleName: e.target.value })}
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title={this.state.jungleRegion}
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item onSelect={this.handleSelectJungle} eventKey="EUNE">EUNE</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectJungle} eventKey="EUW">EUW</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectJungle} eventKey="NA">NA</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Form.Group>
                
                {/* MID */}
                <Form.Group controlId="formGroupEmail">
                    <Image src={midLogo} style={logoStyle} />
                    <Form.Label>MID</Form.Label>
                    <InputGroup>
                        <FormControl
                            placeholder="MID laner's username"
                            aria-label="MID laner's username"
                            aria-describedby="basic-addon2"
                            value={this.state.midName}
                            onChange={e => this.setState({ midName: e.target.value })}
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title={this.state.midRegion}
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item onSelect={this.handleSelectMid} eventKey="EUNE">EUNE</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectMid} eventKey="EUW">EUW</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectMid} eventKey="NA">NA</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Form.Group>
                
                {/* ADC */}
                <Form.Group controlId="formGroupEmail" >
                    <Image src={adcLogo} style={logoStyle} />
                    <Form.Label>ADC</Form.Label>
                    <InputGroup>
                        <FormControl
                            placeholder="ADC's username"
                            aria-label="ADC's username"
                            aria-describedby="basic-addon2"
                            value={this.state.adcName}
                            onChange={e => this.setState({ adcName: e.target.value })}
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title={this.state.adcRegion}
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item onSelect={this.handleSelectAdc} eventKey="EUNE">EUNE</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectAdc} eventKey="EUW">EUW</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectAdc} eventKey="NA">NA</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Form.Group>
                
                {/* SUPP */}
                <Form.Group controlId="formGroupEmail">
                    <Image src={suppLogo} style={logoStyle} />
                    <Form.Label>Support</Form.Label>
                    <InputGroup>
                        <FormControl
                            placeholder="Support's username"
                            aria-label="Support's username"
                            aria-describedby="basic-addon2"
                            value={this.state.suppName}
                            onChange={e => this.setState({ suppName: e.target.value })}
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title={this.state.suppRegion}
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item onSelect={this.handleSelectSupp} eventKey="EUNE">EUNE</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectSupp} eventKey="EUW">EUW</Dropdown.Item>
                            <Dropdown.Item onSelect={this.handleSelectSupp} eventKey="NA">NA</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Form.Group>


                <Button
          className="btnFormSend"
          variant="dark"
          size="lg"
        >
          Scout!
        </Button>
            </Form>


        );
    }
}

export default FormApp;

