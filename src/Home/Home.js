import React, { useEffect } from 'react'
import { selectUserStore, fetchUserDetails } from '../Store/UserStore';
import {useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { fetchFundDetails } from '../Store/FundStore';


export function Home (){
  const dispatch = useDispatch()
  const userdetails = useSelector( state => state.userStore || { userId : ""})
 const fundDetials = useSelector (state => state.fundDetailsStore || { balance : {}})
  useEffect(() => {
    console.log("useeffect called")
    fetchFundDetails()
   }
   ,[])

     return (
       //<TabLayout></TabLayout>
       <div>
<User userId={formattedUserid()} onClick={fetchUserDetails}></User>
    <FundDetails balance={fundDetials.balance}></FundDetails>
       </div>
    
     );
    
    function formattedUserid() {
       return userdetails.userId + "formatted"
     };

}


export const TabLayout = () => {
const [activeTab, setActiveTab] = useState(0);

const tabs = [
 { id: 0, label: 'Tab 1', content:<User userId={1}></User>},
 { id: 1, label: 'Tab 2', content: <User userId={2}></User> },
 { id: 2, label: 'Tab 3', content: <User userId={2}></User> },
];

return (
 <div>
   <div>
   <a href="#">❮</a>

     {tabs.map((tab) => (
       <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
         {tab.label}
       </button>
     ))}
   </div>
   <div className="tab-content">
     {tabs.find((tab) => tab.id === activeTab)?.content}
   </div>
 </div>
);
};



class User extends React.Component {
  constructor(props){
       super(props)
  }
  render( ){
       return (
            <div>       
                 <p>{this.props.userId ?? "should featch user details on Click button below"}</p>
                <button name="Fetch User details" onClick={  this.props.onClick}>Fetch User details</button>
                </div>
    
            );
  }
}
class FundDetails extends React.Component {
constructor(props){
    super(props)
}
render( ){
    return (
         <div>       
              <p>{this.props.balance.amount  ?? "0"}</p>
              <p>{this.props.balance.currency}</p>
             </div>
 
         );
}
}
