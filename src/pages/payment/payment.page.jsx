import '../../assets/styles/payment.scss'
const PaymentPage = () => {
    return <>

        <div className="paymentrow">
            <div className="paymentcol-75">
                <div className="paymentcontainer">
                    <form >

                        <div className="paymentrow">
                            <div className="paymentcol-50">
                                <h3>Payment</h3>
                                <label htmlFor="fname">Accepted Cards</label>
                                <div className="icon-container">
                                    <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                                    <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                                    <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                                    <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                                </div>
                                <label className="paymentlabel" htmlFor="cname">Name on Card</label>
                                <input className="paymentinput" type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                <label className="paymentlabel" htmlFor="ccnum">Credit card number</label>
                                <input className="paymentinput" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                <label className="paymentlabel" htmlFor="expmonth">Exp Month</label>
                                <input className="paymentinput" type="text" id="expmonth" name="expmonth" placeholder="September" />
                                <div className="paymentrow">
                                    <div className="paymentcol-50">
                                        <label className="paymentlabel" htmlFor="expyear">Exp Year</label>
                                        <input className="paymentinput" type="text" id="expyear" name="expyear" placeholder="2018" />
                                    </div>
                                    <div className="paymentcol-50">
                                        <label className="paymentlabel" htmlFor="cvv">CVV</label>
                                        <input className="paymentinput" type="text" id="cvv" name="cvv" placeholder="352" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <input type="submit" value="Continue to checkout" className="paymetnbtn" />
                    </form>
                </div>
            </div>
        </div>

    </>



}
export default PaymentPage