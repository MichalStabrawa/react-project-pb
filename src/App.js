import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "../src/components/Ui/Card";
import Header from "../src/components/Header/Header";
import ProductList from "../src/components/ProductList/ProductList";
import ShopingList from "./components/Header/ShopingList/ShopingList";
import FilterComponent from "./components/Filter/FilterComponent";

import data from "../src/common/data";

function App() {
    const dataGet = data;
    const [state, setState] = useState(dataGet);
    const [names, setName] = useState([]);

    const uniq = state
        .map((item) => item.kategoria)
        .filter((value, index, self) => self.indexOf(value) === index);

    const addListProduct = (name, category, index) => {
        setName([...names, { nazwa: name, kategoria: category, id: index }]);
    };

    const deleteTodo = (id) => {
        const x = names.filter((todo) => todo.id !== id);
        setName(x);
        console.log(id);
    };

    return (
        <div className="App">
            <Header />
            <FilterComponent products={uniq} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Card className="card-product" title={"Product List"}>
                            <ProductList
                                dataProps={state}
                                handleNameChange={(name, category, index) =>
                                    addListProduct(name, category, index)
                                }
                            ></ProductList>
                        </Card>
                    </div>
                    <div className="col">
                        <Card>
                            <ShopingList
                                products={names}
                                title={"Shoping list"}
                                handleNameChanges={(id) => deleteTodo(id)}
                            ></ShopingList>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
