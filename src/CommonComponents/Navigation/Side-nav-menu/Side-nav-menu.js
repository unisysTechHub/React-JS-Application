import NavItem from '../Nav-Menu/Nav-item';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './Side-nav-menu.css'
export function Beneficiary() {
  return <h2>Beneficiary</h2>;
}

export function FundTransfer() {
  return <h2>Fund Transfer</h2>;
}

export function Cards() {
  return <h2>cards</h2>;
}
const sidenavItems = ["Beneficiary", "Fundtransfer", "Cards"];
export function SideNav({ mainMenuItem }) {
  let location = useLocation()
  const sidenavRenderContent = () => {
    if (location.pathname.startsWith("/home")) {

      return (
        <div className="sidenav">
          {sidenavItems.map((item) => (
            <SideMenuNavItem key={item} mainMenuItem={mainMenuItem} sideMenuNavItem={`${item}`} />
          )
          )}
        </div>
      )
    }
    else return null
  }

  return (
    sidenavRenderContent())
}

export const SideMenuNavItem = ({ mainMenuItem, sideMenuNavItem }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(mainMenuItem)
    console.log(sideMenuNavItem)
    switch (mainMenuItem) {
      case "Home":
        switch (sideMenuNavItem) {
          case "Beneficiary":
            navigate(`/home/beneficiary`);
            break;
          case "Fundtransfer":
            navigate(`/home/fundtransfer`);
            break;
          case "Cards":
            navigate(`/home/cards`);
            break;
        }

    }

  };

  return (
    <button className="side-navItem" onClick={handleClick}>
      {sideMenuNavItem}
    </button>
  );
};
