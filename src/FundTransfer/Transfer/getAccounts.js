import { fetchAccounts } from "../../Store/AccountsStore";

// getAccounts.js
export const getAccounts = async () => {
  try {
    const accounts = await fetchAccounts();  // Wait for fetch to complete
    console.log(" Fetched accounts:", JSON.stringify(accounts)); // Log actual result
    return accounts;  // Return the list of accounts
  } catch (error) {
    console.error('❌ getAccounts error:', error);
    throw error;  // Let the caller handle the error
  }
};
