import React from "react";
import Card from "./Card/Card";

const Cards = ({products}) => {
    return (
        <div className="wrapper">
            <div className="productcontainer">
                {products.map(el => {
                    return (
                        <Card
                            key={el.id}
                            id={el.id}
                            image={el.image}
                            title={el.title}
                            price={el.price}
                            freeShipping={el.freeShipping}
                        />
                    );
                })}
            </div>
        </div>
    )
};

export default Cards;