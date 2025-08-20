import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './Nav-content.css';
import NavItem, { SideMenuNavItem } from './Nav-item';
import { Beneficiary, Cards, FundTransfer, SideNav } from '../Side-nav-menu/Side-nav-menu';
import { BeneficiaryTypes } from '../../../FundTransfer/Beneficiary/Beneficiary';
import { Fragment, useState } from 'react';
import AccountOverView from '../../../Accounts/AccountsOverView/AccountsOverView';
import BeneficiaryForm from '../../../FundTransfer/Beneficiary/AddBeneficiary/AddBeneficiaryForm';
import { BeneficiaryFlow } from '../../../FundTransfer/Beneficiary/AddBeneficiary/BeneficiaryFlow';
import { AddBeneficiaryProvider } from '../../../FundTransfer/Beneficiary/AddBeneficiary/BeneficiaryContext';
import IntraTransferForm from '../../../FundTransfer/Transfer/TransferFormIntra';
import { TransferForm } from '../../../FundTransfer/Transfer/TransferForm/TransferForm';
import { TransferReiview } from '../../../FundTransfer/Transfer/TransferForm/TransferReview';
import { FundStransferProvider } from '../../../FundTransfer/Transfer/TransferForm/FundTransferProvider';
import { TransferFlow } from '../../../FundTransfer/Transfer/TransferForm/TransferFlow';
import { Healthz } from '../../../Health/Healthz';

const navItems = [
  { title: "Home" },
  { title: "About" },
  { title: "Contact" }
];


function NavMenu() {
  const [selectedNavMenuItem, setSelectedNavMenuItem] = useState({ title: "Home" });

  const onMenuItemClick = (title) => {
    setSelectedNavMenuItem({ title: title })

  }
  return (
    <div className="routerContainer">
      <Router>
        <div className="topnav">
          {navItems.map((item) => (
            <NavItem key={item.title} title={item.title} onClick={onMenuItemClick} />
          ))}
        </div>
        {/* {
  (() => {
    switch (mainMenuItem) {
      case "Home":
        return <SideNav className="sideNav" mainMenuItem={selectedNavMenuItem.title} />;
      default:
        return null;
    }
  })()
} */}

        <SideNav className="sideNav" mainMenuItem={selectedNavMenuItem.title} ></SideNav>
        <main className="content"  >
          <Routes>
            <Route path="home/beneficiary/intra/*" element={<AddBeneficiaryProvider >{<BeneficiaryFlow beneficiaryType="Intra"></BeneficiaryFlow>}</AddBeneficiaryProvider>} />
            <Route path="home/beneficiary/internal/*" element={<AddBeneficiaryProvider >{<BeneficiaryFlow beneficiaryType="Internal"></BeneficiaryFlow>}</AddBeneficiaryProvider>} />
            <Route path="home/beneficiary/domesticwire/*" element={<AddBeneficiaryProvider >{<BeneficiaryFlow beneficiaryType="DomesticWire"></BeneficiaryFlow>}</AddBeneficiaryProvider>} />
            <Route path="home/beneficiary/international/*" element={<AddBeneficiaryProvider >{<BeneficiaryFlow beneficiaryType="International"></BeneficiaryFlow>}</AddBeneficiaryProvider>} />
            <Route path="home/beneficiary/benefciaryhome" element={<BeneficiaryTypes />} />
            <Route path="/beneficiary" element={<Beneficiary></Beneficiary>} />
            <Route path="/home/fundtransfer" element={<BeneficiaryTypes />} />
            <Route path="/home/fundtransfer/intra" element={<IntraTransferForm transferType="Intra" />} />
            <Route path="/home/fundtransfer/internal" element={<IntraTransferForm transferType="Internal" />} />
            <Route path="/home/fundtransfer/domesticWire/*" element={<FundStransferProvider>{<TransferFlow transferType="DomesticWire" />}</FundStransferProvider>} />
            <Route path="/home/fundtransfer/international/*" element={<FundStransferProvider>{<TransferFlow transferType="International" />}</FundStransferProvider>} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/healthz" element={<Healthz></Healthz>} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home/beneficiary" element={<BeneficiaryTypes></BeneficiaryTypes>} />
            {/* <Route path="/home/beneficiary/domesticwire" element={<TransferForm></TransferForm>}></Route> */}
            <Route path="/home/cards" element={<Cards />} />
          </Routes>
        </main>
        {/* 
        <footer className="footer">
          <p>Footer</p>
        </footer> */}
      </Router>
    </div>
  );
}

export function Home() {
  return (
    <div className='home'>
      <AccountOverView />
    </div>)
}

export function About() {
  return <h2>About Content</h2>;
}

export function Contact() {
  return <h2>Contact Content</h2>;
}

export default NavMenu;
