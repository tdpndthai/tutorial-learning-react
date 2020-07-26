import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/home-page.components'
import ShopPage from './pages/shop/shop.components'
import Header from './components/header/header.components'


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


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        {/* exact chỉ định chỉ khi nào đúng path thì mới hiện lên nội dung ở component đó */}
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} /> */}
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
