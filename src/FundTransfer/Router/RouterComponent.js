import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BeneficiaryTypes } from "../Beneficiary/Beneficiary";
import NavMenu, { Home, About, Contact } from "../../CommonComponents/Navigation/Nav-Menu/Nav-menu";
import './RouterComponent.css'
import { Beneficiary, Cards, FundTransfer } from "../../CommonComponents/Navigation/Side-nav-menu/Side-nav-menu";

function RouterComponent() {
  return (
    <Router>
      <main className="content">

        <Routes>
          {/* <Route path="/" element={<NavMenu />} />
        <Route path="/beneficiary/intra" element={<TransferForm />} />
        <Route path="/beneficiary/internal" element={<TransferForm />} />
        <Route path="/beneficiary/domestic" element={<TransferForm />} />
        <Route path="/beneficiary/international" element={<TransferForm />} />
        <Route path="/transfer/benefciaryhome" element={<BeneficiaryTypes />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Beneficiary" element={<Beneficiary></Beneficiary>} />
         <Route path="/Fundtransfer" element={<FundTransfer />} />
          <Route path="/Cards" element={<Cards />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default RouterComponent;
