import ApiConfig from "./ApiConfig"


export async function addBeneficiary(beneficiary) {
  try {
    const res = await fetch(ApiConfig.baseURL +"/api/transfer/addBeneficiary", {
      body: JSON.stringify({ userId: "user123", ...beneficiary }),
      headers: [["Content-Type", "application/json"]],
      method: "POST"
    })

    const response = await res.json()
    console.log(response.message)
    return response.message

  } catch (e) {

    console.log("Add Beneficiary API error " + e)
    throw new Error(e.message);

  }

}