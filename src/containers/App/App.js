import React, {PropTypes, Component} from 'react';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialName
        };
    }

    static propTypes = {
        initialName: PropTypes.string
    };

    static defaultProps = {
        initialName: 'Аноним'
    };
    handleNameChange = (val)=> {
        const name = val.target.value;
        if (name.length === 0) {
            this.setState({text: this.props.initialName});
        } else {
            this.setState({text: name});
        }
    };

    render() {
        return (
            <div className='App'>
                <h1>Hello World!</h1>
                <div>
                    <p>Введите Ваше имя:</p>
                    <div><input onChange={this.handleNameChange}/></div>
                    {this.state.text}
                </div>
            </div>
        );
    }
}


