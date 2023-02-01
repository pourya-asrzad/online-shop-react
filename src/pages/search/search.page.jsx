import React from 'react';
import PageContainer from '../../layouts/pageContainer/pageContainer.layout';
import { BsSearch } from 'react-icons/bs'
const SearchPage = () => {
    return (
        <PageContainer>
            <div style={{ height: '100vh', width: '100%' }}>
                <div className='centerevrything' >
                    <BsSearch style={{
                        width: '9rem',
                        height: '9rem',
                        display: 'block'
                    }} />
                </div>

            </div>
        </PageContainer>
    );
}

export default SearchPage;
