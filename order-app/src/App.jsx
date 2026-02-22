
import mutton from "./assets/mutton.jpg"
import halal from "./assets/halal.png"
import chicken from "./assets/chicken.jpg"
import './App.css'
import { Link } from "react-router-dom"

function App() {
  
  return (
    <>
     <header className=" flex justify-evenly items-center p-5 bg-white ">
      <div >
       <img src={halal} alt="" className="w-16 header-img" />
           </div>
           <div>
             <h1 className='text-2xl sm:text-4xl text-center m-5 text-blue-800 font-bold '>Galaxy Mutton And Chicken Shop</h1>
           <h3 className='header-desc text-center text-2xl font-medium'>Quality Chicken and Mutton Deleivered to your Doorstep</h3>
           

           </div>
           <div>
              <Link to="/admin" >
              <button className="admin-btn"> <span>ADMIN</span> </button>
               </Link>
           </div>
        </header>
        <section >
          <h1 className="text-2xl py-3 mt-10 mx-10 font-semibold ">Our Products</h1>
          <div className='product flex justify-evenly items-center'>

        <div className="product-card mt-10 bg-white rounded-2xl">
          <img src={chicken} alt="Chicken Image" className="product-card__img mb-3 rounded-xl" />
          <div className="flex justify-center align-middle gap-7 my-9">
          <button className="button-62 ">₹250 per KG</button>
          <button className="button-24">Buy Now</button>
          </div>
          <p className="text-center text-xl">Crispy,Juicy and Oh-So-Fresh Chicken! </p>
        </div>
        <div className="product-card mt-10 bg-white rounded-2xl">
          <img src={mutton} alt="Mutton Image" className="product-card__img2 mb-3 rounded-xl" />
          <div className="flex justify-center align-middle gap-7 my-9">
          <button className="button-62">₹800 per KG</button>
          <button className="button-24">Buy Now</button>
          </div>
          <p className="text-center text-xl">Tender Mutton Cuts,Rich in Flavour! </p>
        </div>
        </div>
        </section>
      </>
  )
}

export default App
