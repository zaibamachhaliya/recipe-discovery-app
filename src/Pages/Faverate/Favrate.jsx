import { useDispatch, useSelector } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import { removeFromFavorites } from "../../Deta/Store";
import { useState } from "react";
import { toast } from "react-toastify";


function Favrate() {

   const favratItem = useSelector((state) => state.products.favorites);
   const dispatch = useDispatch();
   const subtotal = favratItem.reduce((acc, item) => acc + item.price, 0);
   const delivery = 0;
   const taxRate = 0.1;
   const taxes = subtotal * taxRate;

   const [coupon, setCoupon] = useState("");
   const [discount, setDiscount] = useState(0);


   const applyCoupon = () => {
      if (coupon === "SAVE10") {
         setDiscount(subtotal * 0.1);
      } else if (coupon === "SAVE50") {
         setDiscount(50);
      } else {
         setDiscount(0);
         alert("Invalid coupon code!");
      }
   };


   const total = subtotal - discount + delivery + taxes;


   return (
      <>
         {
            favratItem.length > 0 ? (
               <section className="favrateSection">
                  <div className="favrateSectionContainer">
                     <div className="favratSectionContent">
                        {favratItem.map((item, idx) => {
                           return (
                              <div className="favratCard" key={idx}>
                                 <img src={item.strMealThumb} alt={item.strMeal} />
                                 <div className="favratContent">
                                    <div className="itemname">{item.strMeal}</div>
                                    <div className="rating">
                                       {item.ratingresult[0]} {item.ratingresult[1]}
                                    </div>
                                    <div className="price" style={{ fontWeight: 'bold' }}>
                                       $ {item.price}
                                    </div>
                                 </div>
                                 <span
                                    className="deleaticon"
                                    onClick={() => {
                                       dispatch(removeFromFavorites(item.idMeal));
                                       toast.info(`${item.strMeal} has been removed from your favorites.`, {
                                          position: "top-right",
                                          autoClose: 2000,
                                          hideProgressBar: true,
                                          closeOnClick: true,
                                          pauseOnHover: true,
                                          draggable: true,
                                       });
                                    }}
                                 >
                                    <ClearIcon />
                                 </span>

                              </div>
                           );
                        })}
                     </div>

                     <div className="totalPrice">
                        <div className="cartSummary">
                           <h2>Cart Summary</h2>
                           <div className="summaryRow">
                              <span>Subtotal:</span>
                              <span>${subtotal.toFixed(2)}</span>
                           </div>
                           <div className="summaryRow">
                              <span>Delivery:</span>
                              <span className="free">{delivery === 0 ? "Free" : `$${delivery}`}</span>
                           </div>
                           <div className="summaryRow">
                              <span>Taxes:</span>
                              <span>${taxes.toFixed(2)}</span>
                           </div>
                           <hr />
                           <div className="couponBox">
                              <input
                                 type="text"
                                 placeholder="Enter Coupon Code"
                                 value={coupon}
                                 onChange={(e) => setCoupon(e.target.value)}
                              />
                              <button onClick={applyCoupon}>Apply</button>
                           </div>
                           {discount > 0 && (
                              <div className="summaryRow" style={{ marginTop: '1.5rem' }}>
                                 <span>Discount:</span>
                                 <span>- ${discount.toFixed(2)}</span>
                              </div>
                           )}

                           <div className="summaryRow totalRow" style={{ marginTop: '1rem' }}>
                              <span>Total:</span>
                              <span>${total.toFixed(2)}</span>
                           </div>


                           <button className="checkoutBtn">Proceed to Checkout</button>
                        </div>

                     </div>
                  </div>
               </section>
            ) : (
               <div className="emptybag">
                  <img src={`${import.meta.env.BASE_URL}assets/cardEmpty.jpg`} alt="Empty bag" />
                  <p>Your favorites list is empty.</p>
               </div>
            )
         }
      </>

   );
}

export default Favrate;
