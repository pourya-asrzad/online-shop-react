import React, { useState } from "react";
import ExistFilter from "./exist-filter/ExistFilter.component";
import PriceFilter from "./price-filter/PriceFilter.component";
import Styles from './CategoryFilter.module.scss'
const CategoryFilter = ({ setfilterAsquantity }) => {
    const [isEnd, setIsEnd] = useState("filters_parent");
    window.onscroll = function () {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            setIsEnd('filters_parentended')
        } else {
            setIsEnd("filters_parent")
        }
    }
    return (
        <div className={`${Styles[isEnd]}`}>
            <ExistFilter setfilterAsquantity={setfilterAsquantity} />
            <PriceFilter />
        </div>
    );
}

export default CategoryFilter;



