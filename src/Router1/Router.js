// App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes , useNavigate   } from 'react-router-dom';

import {Home,TabLayout} from '../Home/Home';
import HorizontalMenu from '../HorizontalMenu';
import './App1.css'
import Component1 from '../Component1/Component1';
import Component2 from '../Component2/Component2';
import { Component1Navigation } from '../Navigation/Navigation';

const  App11 = () => {
  
     return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Component1">Component 1</Link>
              </li>
              <li>
                <Link to="/component2">Component 2</Link>
              </li>
            </ul>
          </nav>
  
          <hr />
          <div className="content-container">
            <Routes>
          <Route  path="/component1" element={<Component1Navigation></Component1Navigation>} />
          <Route  path="/component2" element={<Component2></Component2>} />
          <Route path='/news' element={<TabLayout></TabLayout>} />
          <Route path="/" element={Component1}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }


export default App11;
