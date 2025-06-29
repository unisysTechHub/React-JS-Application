import { useForm } from "react-hook-form";
import InputField from "../../CommonComponents/InputField/InputField";
import { string } from "prop-types";

const AddAccountTransaction = () => {
    const {handleSubmit} = useForm()

     const onSubmit = async (data) => {
        console.log(data)
        //call API to udate current and available balance
        const callAPI = async () => {
         const response =    fetch({url: "/updateaccount",body:{ userId : "user123",updaetAccountBalance : data}});
               return await respose.json();

        };
        const respose = await callAPI()

     }
    return(<div>
          <form onSubmit={handleSubmit(onSubmit)}>
         <InputField name="AccountNumber" label="Account Number" /> 
         <InputField name="availableBalamce" label="Available Balance" /> 
         <InputField name="currentBalace" label="Current balance">
         </InputField>          </form>

    </div> );
}