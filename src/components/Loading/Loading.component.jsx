import Styles from './loading.module.css'

export const Loading = () => {
    return (
        <div className={Styles.loading_container}>
            <span className={Styles.text}> Pouria Kala</span>
            <div className={Styles.dots}></div>
        </div>
    );
}


