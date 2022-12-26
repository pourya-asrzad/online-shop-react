import Styles from './categoryItem.module.scss'
export const CategoryItem = ({ image, children }) => {
    return (
        <div className={Styles.imagecontainer}>
            <img src={image} alt={children} />
            <span >{children}</span>
        </div>
    );
}
