import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import User from './Pages/User'
import List from './Pages/List'

const AppRoutes = () =>{
  return (
    <Router>
      <Routes>
        <Route exact path="/user" element={ <User /> }/>
        <Route exact path="/" element={ <List /> }/>
      </Routes>
    </Router>
  )
} 

export default AppRoutes
