import React, {Component} from 'react';

class Test2 extends Component {

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("run componentWillReceiveProps Test2.js "+nextProps.name)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('run shouldComponentUpdate() props Test2.js '+this.props.name + 'change to',nextProps.name);
        return nextProps.name !== this.props.name;
    }

    componentWillUpdate(nextProps, nextState,nextContext) {
        console.log('run componentWillUpdate() Test2.js')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('run componentDidUpdate() Test2.js')
    }

    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default Test2;