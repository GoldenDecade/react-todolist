import React, {Component, Fragment} from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState) => ({
            show: !prevState.show
        }))
    }
    render(){
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el)=> console.log(el)}
                    appear={true}
                >
                    <div >hello</div>
                </CSSTransition>
                <button onClick={this.handleClick}>toggle</button>
            </Fragment>
        )
    }
}

export default App;