import React from "react";
function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png" alt="" />
            </div>
            <h1 className="home">home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper img">
                    <img src="https://t4.ftcdn.net/jpg/02/75/39/13/360_F_275391367_Hro3Ql1iFsCNtd86zWYuqa0Qe5cc7goE.jpg" alt="" />

                </div>
            </div>

            <div className="text-wrapper text">
                <span>
                    chapati
                </span>
                <span> price r20</span>

            </div>
            <div className="btn-wrapper btn">
                <button>add to cart</button>
                


            </div>

        </div>
    )
}
export default Home;
