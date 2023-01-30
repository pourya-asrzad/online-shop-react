
import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFetchcategoryQuery, useFetchProductsQuery, useFetchsubcategoryQuery } from '../../store/products/productsApiSlice';

const FormSelect = ({ pagenum, handelSelectChange, subcategory = null, placeholder }) => {

    const { data: catrgory = [] } = useFetchcategoryQuery()
    const { data: subcatrgoryData = [] } = useFetchsubcategoryQuery()

    return (
        <form >
            <Form.Select onChange={(e) => handelSelectChange(e.target.value)} style={{ width: '6rem' }} id='filtercategory' size="sm">
                <option value={"null"}>{placeholder}</option>
                {!subcategory ? catrgory.map((element) => {
                    return <option value={element.id} id={element.id} key={element.id}>{element.name}</option>
                }) : subcatrgoryData.map((element) => {
                    return <option value={element.id} id={element.id} key={element.id}>{element.name}</option>
                })}
            </Form.Select>
        </form >

    );
}

export default FormSelect;
