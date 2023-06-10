import React,{useState} from 'react';
import { makePayment } from '../../../../services/authService';
const PaymentPage = () => {
    const [account_number, setAccountNumber] = useState("");
    const [transaction_id, setTransactionId] = useState("");
    const [bank_name, setBankName] = useState("");


    const handleSubmit = async (event) => {
        const formData = new FormData();
        formData.set("account_number", account_number);
        formData.set("transaction_id", transaction_id);
        formData.set("bank_name", bank_name);
        event.preventDefault();
        makePayment(formData).then((data) => {
            console.log(data);
        }
        );
    }
  return (
    <div className="flex justify-content-center items-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Payment Page</h2>

        <form>
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-gray-700">Account Number</label>
            <input type="text" id="cardNumber" className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            value={account_number}
            onChange={(e)=> {setAccountNumber(e.target.value)}} />
          </div>

          <div className="mb-6">
            <label htmlFor="expiryDate" className="block mb-2 text-sm font-medium text-gray-700">Transaction ID</label>
            <input type="text" id="expiryDate" className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" 
            value ={transaction_id}
            onChange={(e)=>{setTransactionId(e.target.value)}}/>
          </div>

          <div className="mb-6">
            <label htmlFor="paymentMethod" className="block mb-2 text-sm font-medium text-gray-700">Bank Options</label>
            <div className="flex items-center">
              <select id="paymentMethod" className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e)=>{setBankName(e.target.value)}}>
                <option value="Commercial Bank of Ethiopia">
                  Commercial Bank of Ethiopia
                </option>
                <option value="Dashen Bank">
                  Dashen Bank
                </option>
                <option value="Awash Bank">
                  Awash Bank
                </option>
                <option value="Abssinia Bank">
                  Abssinia Bank
                </option>
                <option value="wegagen Bank">
                  Wegagen Bank
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring">Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
