import React, { useState } from 'react'
import './SortBlock.css'

const SortBlock = (props) => {
    const [selectedSize, setSelectedSize] = useState('')
    const sizes = ['all', 'xs', 's', 'm', 'l', 'xl', 'xxl']
    const selectSize = (size) => {
        setSelectedSize(size)
        props.sizeFilter(size)
    }

    return (
        <div className="sortWrapper">
            <div className="sizesWrapper">
                <span className="size-title">Size: </span>
                {sizes.map((v) => {
                    return (
                        <button
                            key={v}
                            className={`buttonSize ${
                                selectedSize === v ? 'active' : null
                            }`}
                            onClick={() => selectSize(v)}
                        >
                            {v.toUpperCase()}
                        </button>
                    )
                })}
            </div>

            <div className="productFound">
                <span> {props.productsCount} product found </span>
            </div>

            <div className="orders">
                <select
                    className="orderBy"
                    onChange={(e) => props.updateSorting(e.target.value)}
                >
                    <option value="Order by">Order by</option>
                    <option value="1">Lowest-Highiest</option>
                    <option value="2">Highiest-Lowest</option>
                </select>
            </div>
        </div>
    )
}

export default SortBlock
