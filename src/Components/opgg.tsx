import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import opggLogo from '../assets/opgg.png'



const logoStyle = { maxHeight: '35px', maxWidth: '35px', }
interface AppProps {

}

interface ITestState {
    topName: string;

}

export type SelectCallback = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>,
) => void;

export class OpggApp extends React.Component<AppProps, ITestState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {

            topName: "",

        };
    }



    render() {
        return (
            <Form className="align-items-center">
                {/* TOP laner */}
                <Form.Group controlId="formGroupEmail">
                    <Image src={opggLogo} style={logoStyle} />
                    <Form.Label>OP.GG</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">multi.op.gg</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Team's multi.op.gg"
                            aria-label="Team's multi.op.gg"
                            aria-describedby="basic-addon2"
                            value={this.state.topName}
                            onChange={e => this.setState({ topName: e.target.value })}
                        />

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

export default OpggApp;

