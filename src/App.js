import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useStateValue } from './StateProvider';


function App() {

  const [{user} ] = useStateValue();

  return (

    <div className="App">
      <Router>
        {!user ?(
          <Login />
        ):(
          <>
          <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/" exact>
                    <h1>welcome</h1>
                  </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
