import { React, useState, useEffect } from "react";

const ShopingList = (props) => {
    //const [state, setState] = useState(props.products);

    return (
        <ul>
            <h3>{props.title}</h3>
            {props.products.length > 0
                ? props.products.map((el, index) => (
                      <li
                          key={index}
                          name={el.nazwa}
                          onClick={() => props.handleNameChanges(el.id)}
                      >
                          {el.nazwa}
                      </li>
                  ))
                : null}
        </ul>
    );
};

export default ShopingList;
