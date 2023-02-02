import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../configs/variables.config';
import { searchActions } from '../../store/search-slice';

import Styles from './HeaderSearch.module.css'
export const HeaderSearchComponent = () => {
    const dispatch = useDispatch()
    const currentLocation = useLocation()
    const navigate = useNavigate()
    const [searchValue, setsearchValue] = useState('');

    function searchOnClick(params) {
        if (currentLocation.pathname !== '/search') {
            navigate('/search')
        }
    }
    useEffect(() => {
        const identifier = setTimeout(() => {
            if (searchValue !== '') {
                axios.get(`${API_BASE_URL}products?q=${searchValue}`).then((res) => {
                    dispatch(searchActions.seLoading(true))
                    if (res.statusText == 'OK') {
                        dispatch(searchActions.searchAnswer(res.data))
                    }
                }).catch(err => {
                    alert(err.message)
                }).finally(() => {
                    dispatch(searchActions.seLoading(false))
                })
            }
        }, 600);
        return () => {
            clearTimeout(identifier);
        };
    }, [searchValue]);



    function searchOnchange(e) {
        if (currentLocation.pathname === '/search') {
            setsearchValue(e.target.value)
        }
    }

    return (
        <input value={searchValue} onChange={searchOnchange} onClick={searchOnClick} autoFocus={currentLocation.pathname == '/search' ? true : false} className={Styles.headersearchinput} placeholder="جستجو..." type="search" name="search" id="search" />
    );
}


