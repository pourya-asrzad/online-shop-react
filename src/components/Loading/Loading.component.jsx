import Styles from './loading.module.css'

export const Loading = () => {
    return (
        <div className={Styles.loading_container}>
            <div className={Styles.dots}></div>
        </div>
    );
}


