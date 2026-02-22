import { useEffect, useState } from "react";
import "./Order.css"

function Order(){

    const[product,setProduct]=useState("");
    const[userName,setUserName]=useState([]);
    const[phoneNumber,setPhoneNumber]=useState([]);
    const[quantity,setQuantity]=useState([]);
    const[amount,setAmount]=useState('');
    const[showAlert,setShowAlert]=useState(false);
   const[notify,setNotify]=useState(false);
    const prices={
        Chicken:250,
        Mutton:800
    }

    useEffect(()=>{
        if(product && quantity){
            setAmount(quantity *prices[product])
        }
        else{
            setAmount("")
        }
    },[product,quantity]);

      async function handle(e){
        e.preventDefault(); 
        try{
             const inserData=await fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                userName:userName,
                phoneNumber:phoneNumber,
                product:product,
                amount:amount
            })
              })
             const data =await inserData.json();
             setNotify(true);  
            }
        catch(error){
             console.log(error);
            }         
        }    

         function apperAlert(){
         setShowAlert(true);
        }

        function disapperAlert(){
            setShowAlert(false);
             window.location.reload();
        }

    return(
        <>
        <div className="bg-yellow-200 pb-2 mt-10">
        <h1 className="text-2xl pt-5 mx-10 font-semibold" >Place Your Orders</h1>
       <form  onSubmit={handle} className="order-form" >
  <div className="form-group">
    <label htmlFor="username">Your Name</label>
    <input
      id="username"
      type="text"
      value={userName}
      onChange={(e)=> setUserName(e.target.value.toUpperCase())}
      placeholder="Enter Your Name"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="phone">Mobile Number</label>
    <input
      id="phone"
      type="text"
      onChange={(e)=> setPhoneNumber(e.target.value)}
      placeholder="Your Mobile Number"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="address">Delivery Address</label>
    <input
      id="address"
      type="text"
      placeholder="Your Address"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="product">Product</label>
    <select
      id="product"
      required
      value={product}
      onChange={(e)=> setProduct(e.target.value)}
    >
      <option value="">Select</option>
      <option value="Mutton">Mutton</option>
      <option value="Chicken">Chicken</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="quantity">Quantity (KG)</label>
    <input
      id="quantity"
      type="number"
      value={quantity}
      onChange={(e)=> setQuantity(e.target.value)}
      required
      placeholder="Quantity"
    />
  </div>

  <div className="form-group">
    <label htmlFor="amount">Amount</label>
    <input
      id="amount"
      type="number"
      value={amount}
      readOnly
      placeholder="Total Amount"
    />
  </div>

  <button className="order-btn" type="submit" onClick={apperAlert}>
    Place Order
  </button>

</form>
       {notify && showAlert && (
            <div className="overlay">
                <div className="alertbox">
                    <p className="my-6">Order Taken</p>
                    <button onClick={disapperAlert}  className="alert-btn">OK</button>
                </div>
            </div>
          )}
         </div>
 
        </>
    );
}

export default Order;
