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
        <Route exact path="/" element={ <List /> }/>
        <Route exact path="/user" element={ <User /> }/>
        <Route exact path="/user/:id" element={ <User /> }/>
        <Route
          path="*"
          element={
            <main style={{ marginTop: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  )
} 

export default AppRoutes
