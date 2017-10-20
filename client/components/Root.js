import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Zach = () => (
  <div>
    <h2>Zach</h2>
  </div>
)

const Bade = ({ match }) => (
  <div>
    <h2>Bade</h2>
    <ul>
      <li>
        <Link to={`${match.url}/activities`}>
          What is the bade up to
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/diet`}>
          What does the bade eat
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Root = () => {
	return (
		<Router>
			<div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/zach">Zach</Link></li>
	        <li><Link to="/bade">Bade</Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={Home}/>
	      <Route path="/zach" component={Zach}/>
	      <Route path="/bade" component={Bade}/>
	    </div>
		</Router>
	)
}

export default Root