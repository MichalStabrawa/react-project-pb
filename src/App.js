import "./App.css";
import { useState, useEffect } from "react";
import Card from "../src/components/Ui/Card";
import Header from "../src/components/Header/Header";
import ProductList from "../src/components/ProductList/ProductList";
import ShopingList from "./components/Header/ShopingList/ShopingList";
import FilterComponent from "./components/Filter/FilterComponent";
import AddProduct from "./components/AddProduct/AddProduct";

import data from "../src/common/data";

function App() {
    const dataGet = data;
    const [state, setState] = useState(dataGet);
    const [names, setName] = useState([]);
    const [checkbox, setCheckbox] = useState(false);

    console.log("state", names);
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

    const changeHandleName = (e) => {
        const keyword = e.target.value;

        if (keyword !== "") {
            const results = dataGet.filter((user) => {
                return user.nazwa
                    .toLowerCase()
                    .startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setState(results);
        } else {
            setState(dataGet);
            // If the text field is empty, show all users
        }
    };

    const changeHandleCategory = (e) => {
        const keyword = e.target.value;

        if (keyword !== "") {
            const results = dataGet.filter((user) => {
                return user.kategoria
                    .toLowerCase()
                    .startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setState(results);
        } else {
            setState(dataGet);
            // If the text field is empty, show all users
        }
    };

    const handleChecbox = () => {
        setCheckbox(!checkbox);
        console.log(checkbox);
        const x = state.filter((value) => value.produktSpozywczy !== false);
        if (checkbox === false) {
            setState(x);
        } else {
            console.log(checkbox);
            setState(dataGet);
        }
    };

    const resetFilter = (e) => {
        setState(dataGet);
    };

    useEffect(() => {
        console.log("state useefect", names);
    });

    return (
        <div className="App">
            {console.log("state render", names)}
            <Header />
            <AddProduct />
            <FilterComponent
                products={uniq}
                handleFilterInput={(e) => changeHandleName(e)}
                handleFilterCategory={(e) => changeHandleCategory(e)}
                resetFilter={(e) => resetFilter(e)}
                handleChecbox={(e) => handleChecbox(e)}
                value={checkbox}
            />
            <div className="container-fluid main-products bg-light">
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
