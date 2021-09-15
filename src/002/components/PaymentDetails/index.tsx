import React, { useEffect, useState } from "react"
import InputField from "../InputField"
import OrdersTotal from "../OrdersTotal"
import "./PaymentDetails.scss"


const PaymentDetails: React.FC = () => {
    const [total, setTotal] = useState<number>()
    const [shipping, setShipping] = useState<number>()
    
    return (
        <div className="container">

            <div className="content">
                <form action="">
                    <h1>Payment</h1>
                    <InputField
                        type="text"
                        label="Cardholder's Name"
                        icon=""
                    />
                    <InputField
                        type="text"
                        label="Card Number"
                        icon="far fa-credit-card"
                    />

                    <div className="expiry-date-cvv">
                        <InputField
                            type="text"
                            label="Valid Through"
                            icon=""
                        />
                        <InputField
                            type="text"
                            label="CVV"
                            icon=""
                        />
                    </div>
                    <button className="bg-green">Checkout</button>
                    <span className="seperator"></span>
                    <span className="other-payment-method">Or select another payment method</span>
                    <button className="bg-blue">Checkout with <i className="fab fa-paypal"></i></button>
                </form>
                <OrdersTotal/>
            </div>
        </div>
    )
}

export default PaymentDetails