import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import * as action from './../../redux/actions/textAction'


class textInput extends Component {
    handleNameChange = (val)=> {
        const name = val.target.value;
        this.props.dispatch(action.changeText(name))
    };

    render() {
        return (
            <div className='App'>
                <h1>Hello World!</h1>
                <div>
                    <p>Введите Ваше имя:</p>
                    <div><input onChange={this.handleNameChange}/></div>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        text:state.text.text
    }
}

export default connect(mapStateToProps)(textInput)