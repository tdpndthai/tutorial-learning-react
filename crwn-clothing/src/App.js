import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/home-page.components'
import ShopPage from './pages/shop/shop.components'
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.components';
import { auth } from './components/firebase/firebase.utils'


// const HatsPage = (props) => (
//   <div>
//     <Link to="/topics" >Topics</Link>
//     <button onClick={() => props.history.push('/topics')}>Topics</button>
//     <h2>Hats Page</h2>
//   </div>
// )

// const TopicsList = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>Topic List</h1>
//     </div>
//   )
// }

// const TopicDetail = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>Topic Detail</h1>
//     </div>
//   )
// }


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFormAuth = null


  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/* exact chỉ định chỉ khi nào đúng path thì mới hiện lên nội dung ở component đó */}
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/topics" component={TopicsList} />
          <Route path='/topics/:topicId' component={TopicDetail} /> */}
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
