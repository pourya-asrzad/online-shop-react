import axios from 'axios'
import { BsCheckLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/payment.scss'
import { INTERNAL_PATHS } from '../../configs/routs.config'
import { API_BASE_URL } from '../../configs/variables.config'
const PaymentPage = () => {
    const navigate = useNavigate()
    const paymentresault = async (answer) => {
        localStorage.setItem('paymentResault', JSON.stringify(answer))
        if (answer) {
            const orderData = JSON.parse(localStorage.getItem('orderData'))
            const userId = JSON.parse(localStorage.getItem('userId'))

            await axios.post(`${API_BASE_URL}orders`, orderData)
            await axios.patch(`${API_BASE_URL}mockusers/${userId}`, {
                cart: []
            })
        }
        navigate(INTERNAL_PATHS.PAYMENT_RESULT)
    }
    return <>

        <div className="paymentrow">
            <div className="paymentcol-75">
                <div className="paymentcontainer">

                    <div className="paymentrow">
                        <div className="paymentcol-50">
                            <h3 className='paymenttitle'>درگاه پرداخت</h3>

                            <div className="icon-container">
                                <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                                <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                                <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                                <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                            </div>
                            <label className="paymentlabel" htmlFor="cname">نام ونام خانوادگی</label>
                            <input className="paymentinput" type="text" id="cname" name="cardname" placeholder="پوریا عصرزاد" />
                            <label className="paymentlabel" htmlFor="ccnum">شماره کارت</label>
                            <input className="paymentinput" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                            <label className="paymentlabel" htmlFor="expmonth">تاریخ انقضا کارت</label>
                            <input className="paymentinput" type="text" id="expmonth" name="expmonth" placeholder="September" />
                            <div className="paymentrow">
                                <div className="paymentcol-50">
                                    <label className="paymentlabel" htmlFor="expyear">CVV2</label>
                                    <input className="paymentinput" type="text" id="expyear" name="expyear" placeholder="2018" />
                                </div>
                                <div className="paymentcol-50">
                                    <label className="paymentlabel" htmlFor="cvv"> رمز کارت</label>
                                    <input className="paymentinput" type="text" id="cvv" name="cvv" placeholder="352" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='paymentbtnsparent'>
                        <button className="paymetnbtncancel" onClick={() => paymentresault(false)}>انصراف</button>
                        <button className="paymetnbtn" onClick={() => paymentresault(true)}>پرداخت</button>
                    </div>
                </div>
            </div>
        </div>

    </>



}
export default PaymentPage