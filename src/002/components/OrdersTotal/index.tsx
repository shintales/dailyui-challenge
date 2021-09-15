import React from "react"
import "./OrdersTotal.scss"

const OrdersTotal: React.FC = () => {
    return (
        <div className="orders-total">
            <div className="to-pay">
                <span className="orders-total-text">Order Total</span>
                <span className="total-order">$329</span>
            </div>
            <span className="cancel-payment"><i className="fas fa-arrow-left"></i> Cancel your payment</span>
        </div>
    )
}

export default OrdersTotal