import React    from "react";
import template from "./HorizontalMenu.jsx";
import { Link } from "react-router-dom";
import { string } from "prop-types";

class HorizontalMenu extends React.Component {
  constructor(props) {

    var x = "Test"
    super(props)
    this.state = {onMouseOver : false}
   this.onMouseOver =  this.onMouseOver.bind(this)
  }
  onMouseOver () {
    this.setState((prevState) => ({
      onMouseOver: true,
    }));
  }
  render() {
  
    const combinedClassName = `li  ${this.props.className || ''}`;
    return (
      <div>
        <ul>
          <li><a className={ combinedClassName}  onMouseOver={this.onMouseOver} href="#home"><Link to={'/'}>Home</Link></a></li>
          <li><a className={ combinedClassName} href="#news"></a><Link to={'/news'}>News</Link></li>
          <li><a className={ combinedClassName} href="#contact">Contact</a></li>
          <li><a className={ combinedClassName} href="#about">About</a></li>
          </ul>
        {this.state.onMouseOver ? (
          <div>
            {/* Render this block when isTrue is true */}
            <h1>Rendered when isTrue is true</h1>
          </div>
        ) : null }
      </div>
    );
  }
  
}
 

export default HorizontalMenu;
