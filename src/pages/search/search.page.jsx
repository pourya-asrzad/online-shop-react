import React from 'react';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { BsSearch } from 'react-icons/bs'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MainCard from '../../components/main-card/MainCard.component';
import { INTERNAL_PATHS } from '../../configs/routs.config';
import Styles from './search.module.scss'
import { Loading } from '../../components';
const SearchPage = () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    const searchAnswer = useSelector(state => state.search.searchData)
    const isLoading = useSelector(state => state.search.loading)

    return (
        <PageContainer>
            {isLoading ? <Loading /> : <div style={!searchAnswer || searchAnswer.error == 404 ? { height: '100vh', width: '100%' } : { width: '100%' }}>
                <div className={!searchAnswer ? 'centerevrything' : ''} >
                    {!searchAnswer ? <div>
                        <BsSearch style={{
                            width: '9rem',
                            height: '9rem',
                            display: 'block'
                        }} />
                        <span >...در پوریاکالا جستجو کنید</span>
                    </div>
                        : <>
                            {searchAnswer.length > 0 && searchAnswer.error !== 404 ? <span className={Styles.indexanswer}> {`${searchAnswer.length}  کالا یافت شد `}</span> : ''}
                            <section className={Styles.cardContainerSection}>
                                {
                                    searchAnswer.length > 0 ? searchAnswer.map((product) => {
                                        return <Link key={product.id} className='link-route' to={INTERNAL_PATHS.SINGLEPRODUCT + "/" + product.id}>
                                            <MainCard quantity={product.quantity} title={product.name}
                                                discount={product.Discount} price={product.price} image={product.image[0]} key={product.id} />
                                        </Link>
                                    })
                                        : ''


                                }
                                {
                                    searchAnswer.error == 404 && <h4 className='centerevrything'>
                                        {searchAnswer.errorMessage}
                                    </h4>
                                }
                            </section>
                        </>
                    }
                </div>

            </div>}
        </PageContainer>
    );
}

export default SearchPage;
