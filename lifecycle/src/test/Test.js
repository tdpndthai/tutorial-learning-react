import React, {Component} from 'react';
import Test2 from "../test2/Test2";

class Test extends Component {

    constructor(props){
        super(props);
        this.state={
            status:'init',
            status2:'status2'
        }
    }

    componentWillMount() {
        console.log("run componentWillMount Test.js")
    }

    componentDidMount() {
        console.log('run componentDidMount() Test.js')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('run shouldComponentUpdate() '+this.state.status + 'change to',nextState.status);
        return nextState.status !== this.state.status;
    }
    componentWillUpdate(nextProps, nextState,nextContext) {
        console.log('run componentWillUpdate() Test.js')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('run componentDidUpdate() Test.js')
    }

    updateState = () => {
        this.setState({
            status:'status did update',
            status2:'status2 did update'
        });
    }
    render() {
        console.log('function render() 1')
        return (
            <div>
                <h3>test </h3>
                <Test2 name={this.state.status2}></Test2>
                <button onClick={()=> this.updateState()}>Click</button>
            </div>
        );
    }
}

export default Test;