
import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFetchcategoryQuery, useFetchProductsQuery } from '../../store/products/productsApiSlice';

const FormSelect = ({ pagenum, handelSelectChange }) => {

    const { data: catrgory = [] } = useFetchcategoryQuery()

    return (
        <form >
            <Form.Select onChange={(e) => handelSelectChange(e.target.value)} style={{ width: '6rem' }} id='filtercategory' size="sm">
                <option value={"null"}>همه</option>
                {catrgory.map((element) => {
                    return <option value={element.id} id={element.id} key={element.id}>{element.name}</option>
                })}
            </Form.Select>
        </form >

    );
}

export default FormSelect;
