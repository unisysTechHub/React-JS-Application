import { Route, Routes } from "react-router-dom"
import { TransferReiview } from "./TransferReview"
import { TransferSucessFailure } from "./TransferSuccessFailure"
import { lazy, Suspense, useState } from "react";
import TransferForm, { SkeletonLoader } from "./TransferForm";
import TransferFormSkeleton from "./TransferFormSkeleton";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { del } from "framer-motion/client";
export const pageTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.3 },
};

const delay = async (ms) => {
const  resolve = (res) => import("./TransferForm")
   const reject = (cause) => import("./TransferFormSuspense")
 try {  
 const response = await fetch('http://127.0.0.1:8082/api/transfer/initiatetransfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
     const responseModel =  response.json()
   return (props) =>{return (<TransferForm beneficiares={""} transferType={props.transferType}></TransferForm>)}
    
  }catch(error){
    return reject()
  }
       
} ;
const dealy = (ms) => {
  return  new Promise((resolve, reject) => setTimeout(resolve(import('./TransferForm')),ms))
}

const TransferFormlazy = lazy(async () => {
     //load transferform on error or sucess
    return  dealy(3000)
   
    }
  );

export const TransferFlow = (props) => {

  return (
    <Routes>
      <Route path="/" element={
        <TransferFormWithSuspense transferType={props.transferType}></TransferFormWithSuspense> 
        } ></Route>
      <Route path="/review" element={
        <TransferReiview transferType={props.transferType}></TransferReiview>
       } ></Route>
      <Route path="/status" element={<TransferSucessFailure transferType={props.transferType}></TransferSucessFailure>}></Route>
    </Routes>
  )
}


export const TransferFormWithSuspense = (props) => {
  return (
    <Suspense fallback={<TransferFormSkeleton />}>
      <TransferFormlazy transferType={props.transferType}></TransferFormlazy>
    </Suspense>
  );
};