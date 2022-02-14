import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "../src/components/Ui/Card";
import Header from "../src/components/Header/Header";
import ProductList from "../src/components/ProductList/ProductList";
import ShopingList from "./components/Header/ShopingList/ShopingList";

import data from "../src/common/data";

function App() {
    const dataGet = data;
    const [state, setState] = useState(dataGet);
    const [names, setName] = useState([]);

    const addListProduct = (name) => {
        setName([...names, { value: name }]);
    };
    useEffect(() => {
        setName(names);
    });
    return (
        <div className="App">
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Card className="card-product" title={"Product List"}>
                            <ProductList
                                dataProps={state}
                                handleNameChange={(name) =>
                                    addListProduct(name)
                                }
                            ></ProductList>
                        </Card>
                    </div>
                    <div className="col">
                        <Card>
                            <ShopingList
                                products={names}
                                title={"Lista props"}
                            ></ShopingList>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
