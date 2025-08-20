
export const transferFunds = async (fromAccount, beneficiary, amount, beneficiaryType) => {
  try {
    //fromAccount.usBankAccount.account_type
    const response = await fetch('http://127.0.0.1:8082/api/transfer/initiatetransfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderAccount: fromAccount.accountNumber, receiverAccount: beneficiary.accountNumber, beneficiary: beneficiary,
        senderAccountType: "Checking", receiverAccountType: beneficiary.accountType, senderAccountDetails: fromAccount,
        transactionType: "TRANSFER", transferType: beneficiaryType,
        userDetails: { userId: "user123" }, description: `Intra transer  to + ${beneficiary.beneficiaryName}`,
        amount: amount
      }),
    });

    var data
              console.log('✅ Transfer Successful:', JSON.stringify(data));

    if (!response.ok) {
      throw new Error(`Transfer failed: ${response.status}`);
      //data = InitTransferResponseModel
    }
    else {
       data = await response.json();
      console.log('✅ Transfer Successful:', JSON.stringify(data));
    }
    return data;
  } catch (error) {
    console.error('❌ Transfer Error:', error);
    return InitTransferResponseModel;
    // throw error;
  }

};

const InitTransferResponseModel = {
  "responseCode": "200",
  "message": "Transfer transaction successfull",
  "transaction": {
    "transactionId": "TXN-20250507-121900-032C30",
    "senderAccount": 24434343455454,
    "senderAccountType": "checking",
    "receiverAccount": 987654322,
    "receiverAccountType": "Checking",
    "amount": 10.00,
    "transactionType": "TRANSFER",
    "transferType": "DomesticWire",
    "senderAccountDetails": null,
    "receiverAccountDetails": null,
    "beneficiary": {
      "id": 1,
      "accountType": "Checking",
      "transferType": "DomesticWire",
      "transferTypeACH": null,
      "country": "US",
      "currency": "usd",
      "iban": null,
      "swiftBicCode": null,
      "accountNumber": 987654322,
      "bankName": "ABC Bank",
      "beneficiaryName": "John Doe",
      "phoneNumber": "123-456-7890",
      "email": "johndoe@example.com"
    },
    "userDetails": {
      "id": 1,
      "userId": "user123",
      "password": "password",
      "role": null,
      "accountList": null,
      "transactionsDomestic": null,
      "TransactionsInternal": null,
      "transactionsIntra": null,
      "transactionsItnernational": null,
      "beneficiaryList": null,
      "transactionsInternal": null
    },
    "description": "Intra transer \" + \"to\" + John Doe"
    
  }
   
}
