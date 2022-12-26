import Styles from './footer.module.css'
import { getCopyrightMassege } from '../../utils/functions.utils';
import arrowtop from '../../assets/images/uparrow.png'
const Footer = () => {

    const copyRighttext = getCopyrightMassege()
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <div className={`${Styles.footertop} flex j-c`}>

                <div className={Styles.back_to_top} onClick={backToTop}>
                    <img src={arrowtop} alt="arrrowtop" />
                    <span>
                        بازگشت به بالا
                    </span>
                </div>
            </div>
            <footer>
                <div className={Styles.footercontainer}>
                    <div className={Styles.righttextcontainer}>
                        <h3 className={Styles.footertxttitle}>
                            فروشگاه اینترنتی پوریاکالا, بررسی، انتخاب و خرید آنلاین
                        </h3>
                        <p className={Styles.footertxtbodytitle}>
                            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی پوریاکالا روزهاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                        </p>
                    </div>
                    <div className={Styles.footerimagecontainer}>
                        <div className={Styles.imagecontainer}>
                            <img width={75} height={75} src="https://trustseal.enamad.ir/Content/Images/Star2/85.png?v=5.0.0.3777" alt="www.pouriakala.com" />
                        </div>
                        <div className={Styles.imagecontainer}>
                            <img width={75} height={75} src="https://www.digikala.com/statics/img/png/kasbokar.png" alt="www.pouriakala.com" />
                        </div>
                        <div className={Styles.imagecontainer}>
                            <img width={75} height={75} src="https://www.digikala.com/statics/img/png/rezi.png" alt="www.pouriakala.com" />
                        </div>
                    </div>
                </div>
                <div className={Styles.copyRighttext}>
                    {copyRighttext}
                </div>
            </footer>
        </>
    );
}

export default Footer;
