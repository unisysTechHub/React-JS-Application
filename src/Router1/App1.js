// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App1.css'
import {Home,TabLayout} from '../Home/Home';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
// class App1 extends React.Component {
//   constructor(props) {
//     super(props)

//   }
//   render() {
   
//     return (
//       <Router>
//         <div>
//           <nav >
//             <ul>
//               <li>
//                 <Link to="/">Component 1</Link>
//               </li>
//               <li>
//                 <Link to="/component2">Component 2</Link>
//               </li>
//             </ul>
//           </nav>
         
//           <hr />
//           <Switch>
//           <Route exact path="/" component={HorizontalMenu} />
//           <Route path="/component2" component={TabLayout} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App1;
