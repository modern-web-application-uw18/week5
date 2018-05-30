import React from 'react'
import { Switch, Route, Link,} from 'react-router-dom'
import Characters from '../characters/characters'
import Character from '../character/character'

// The Header creates links that can be used to navigate
// between routes.
const Main = () => (
  <div>
  <Switch>
    <Route exact path='/' component={Characters}/>
    <Route path='/character/:number' component={Character}/>
  </Switch>
  <Link to='/'>Back</Link>
</div>
 
)

export default Main