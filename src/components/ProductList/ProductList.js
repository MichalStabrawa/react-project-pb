import { React, useState } from "react";
import "./ProductList.css";

const ProductList = (props) => {
    return (
        <>
            <ul className="product-list">
                {props.dataProps
                    ? props.dataProps.map((el, index) => {
                          return (
                              <li
                                  key={index}
                                  onClick={() =>
                                      props.handleNameChange(el.brand)
                                  }
                              >
                                  {el.brand}
                              </li>
                          );
                      })
                    : null}
            </ul>
        </>
    );
};

export default ProductList;
