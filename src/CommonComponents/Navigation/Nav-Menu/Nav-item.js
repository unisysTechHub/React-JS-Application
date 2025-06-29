import { useNavigate } from 'react-router-dom';
import './Nav-content.css';
const NavItem = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(props.title)
    props.onClick(props.title)
    switch (props.title) {
      case "Home":
        navigate(`/home`);
        break
      case "About":
        navigate("/about")
        break;
      case "Contact":
        navigate(`/contact`)
    }
  };

  return (
    <text key={props.title} className="navItem" onClick={handleClick}>
      {props.title}
    </text>
  );
};



export default NavItem;
