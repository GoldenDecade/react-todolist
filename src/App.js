import React, {Component, Fragment} from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let item = Math.random();
        this.setState((prevState) => ({
            list: [...prevState.list, item]
        }));
    }
    render(){
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el)=> console.log(el)}
                                    appear={true}
                                    key={item}
                                >
                                    <div >{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleClick}>toggle</button>
            </Fragment>
        )
    }
}

export default App;