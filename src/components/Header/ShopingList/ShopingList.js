import { React, useState, useEffect } from "react";

const ShopingList = (props) => {
    const [state, setState] = useState(props.products);
    useEffect(() => {
        setState(props.products);
    });

    return (
        <ol>
            <h3>{props.title}</h3>
            {state.length > 0
                ? state.map((el, index) => <li key={index}>{el.value}</li>)
                : null}
        </ol>
    );
};

export default ShopingList;
