import React from 'react';
import Main from './components/pages/Main/Main';
import ErrorMessage from './components/pages/ErrorMessage/ErrorMessage';
import UsersPage from './components/pages/UsersPage';
import UserIdPage from './components/pages/UserIdPage'
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import './style/app.css';


export default function App (){
        return (            
            <Router>
              <div className="app">
                  <Switch>               
                    <Route path='/' component={Main} exact/>
                    <Route path='/users' component={UsersPage} exact/>
                    <Route path='/users/:id' exact component={UserIdPage}/>
                    <Route path='/error' component={ErrorMessage}/>
                      <Redirect to='/error'/>  
                  </Switch>
                </div>
            </Router>
        )
    };

