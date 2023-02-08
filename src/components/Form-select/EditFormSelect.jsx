
import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFetchcategoryQuery, useFetchProductsQuery, useFetchsubcategoryQuery } from '../../store/products/productsApiSlice';

const EditFormSelect = ({ pagenum, handelSelectChange, subcategory = null, placeholder, initialValue,
    setSubcategory, changeSubcategoryid }) => {

    const { data: catrgory = [] } = useFetchcategoryQuery()
    const { data: subcatrgoryData = [] } = useFetchsubcategoryQuery()
    const subcategoryDataFilter = subcatrgoryData.filter((sub) => {
        return sub.category == changeSubcategoryid
    })
    useEffect(() => {
        if (subcategory && changeSubcategoryid) {
            if (document.getElementById('filtercategory')) {
                setSubcategory(subcategoryDataFilter[0].id)
            }
        }
    }, [changeSubcategoryid]);
    return (

        <form >
            <Form.Select value={initialValue} onChange={(e) => handelSelectChange(e.target.value)} style={{ width: '6rem' }} id='filtercategory' size="sm">
                {!initialValue && <option value={'null'}>{placeholder}</option>}
                {!subcategory ? catrgory.map((element) => {
                    return <option value={element.id} id={element.id} key={element.id}>{element.name}</option>
                }) : subcategoryDataFilter.map((element) => {
                    return <option value={element.id} id={element.id} key={element.id}>{element.name}</option>
                })}
            </Form.Select>
        </form >

    );
}

export default EditFormSelect;
