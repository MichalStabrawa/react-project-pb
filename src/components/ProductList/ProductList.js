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
                                  name={el.nazwa}
                                  category={el.kategoria}
                                  onClick={() =>
                                      props.handleNameChange(
                                          el.nazwa,
                                          el.kategoria,
                                          Math.random().toString(16).slice(2)
                                      )
                                  }
                              >
                                  {el.nazwa}
                              </li>
                          );
                      })
                    : null}
            </ul>
        </>
    );
};

export default ProductList;
