import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import BeneficiaryForm from "./AddBeneficiaryForm"
import { BeneficiaryReview } from "./BeneficiaryReview"

export const BeneficiaryFlow = ({ beneficiaryType }) => {
        return (
                <Routes>
                        <Route path="/" element={<BeneficiaryForm beneficiaryType={beneficiaryType} />}></Route>
                        <Route path="/review" element={<BeneficiaryReview />}></Route>
                        
                </Routes>
        )
}

