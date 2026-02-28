import { useEffect, useState } from "react";
import halal from "./assets/halal.png"
import { Link } from "react-router-dom";
import "./Status.css"

function Manage(){

    const[data,setData]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((response)=> response.json())
        .then((response)=> setData(response))
        .catch((err)=> console.log(err))
    },[]);

    async function deleteData(_id){
        try{
            await fetch(`http://localhost:3000/users/${_id}`,{
                method:"DELETE"
            })
            setData(data.filter((datas)=> datas._id !==_id));
        }
        catch(err){
            console.log(err)
        }      
    }
    
    return(
        <>
        <header className=" flex justify-evenly items-center p-5 bg-white ">
      <div >
       <img src={halal} alt="" className="header_img w-16" />
           </div>
           <div>
             <h1 className='text-2xl sm:text-4xl text-center m-5 text-blue-800 font-bold '>Galaxy Mutton And Chicken Shop</h1>
           <h3 className='header_desc text-center text-2xl font-medium'>Quality Chicken and Mutton Deleivered to your Doorstep</h3>

           </div>
           <div>
              <Link to="/" >
              <button className="admin-btn"> <span>Home</span> </button>
               </Link>
           </div>
        </header>

        <h1 className="m-6 text-2xl font-semibold">Orders Taken</h1>
        <div>
            {data.length >0? (
<div className="orders-container">
  {data.map((datas, id) => (
    <div key={id} className="order-card">

      <div className="ordered-status">

        <p className="customer-name">
          <i className="fa-solid fa-user mx-2"></i>
          {datas.userName}
        </p>

        <p className="phone">
          <i className="fa-solid fa-phone mx-2"></i>
          {datas.phoneNumber}
        </p>

        <div className="product-list">
          <p>
            <i className="fa-solid fa-cart-arrow-down mx-2"></i>
            {datas.product}
          </p>
        </div>

        <div className="order-footer">
          <p className="total">
            <i className="fa-solid fa-hand-holding-dollar mx-2"></i>
             {datas.amount}
          </p>

          <button className="button" onClick={()=>{ deleteData(datas._id);  window.location.reload();}}>
           
  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
          </button>
        </div>

      </div>

    </div>
  ))}
</div>
            ) :
            
            (
                <>
               
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
<div> <p className="text-center font-bold m-5 text-2xl">Loading... Please Wait... or Contact HAKKIM</p></div>

</>
            )
            }
        </div>
        </>
    );
}
export default Manage;
