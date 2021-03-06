import { React, useState, useEffect } from "react";
import "./FilterComponent.css";

const FilterComponent = (props) => {
    // const [checkvalue, setCheckValue] = useState(false);
    const {
        products,
        handleFilterInput,
        handleFilterCategory,
        resetFilter,
        handleChecbox,
        value,
    } = props;

    return (
        <div className="container-fluid filter">
            <div className="row">
                <div className="col-12 filters-item">
                    <h2 className="filter-title">Filters</h2>
                </div>
                <div className="col">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="text"
                        onChange={(e) => handleFilterInput(e)}
                    />
                </div>

                <div className="col">
                    <label className="form-label">Category</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={{ label: "Select Dept", value: "" }}
                        onChange={(e) => handleFilterCategory(e)}
                    >
                        <option></option>
                        {products.map((el, index) => (
                            <option key={index} value={el}>
                                {el}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={value}
                            id="flexCheckDefault"
                            onChange={() => handleChecbox()}
                        />
                        <label className="form-check-label">
                            Is produkt spozywczy
                        </label>
                    </div>
                </div>
                <div className="col">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => resetFilter(e)}
                    >
                        Clean filter
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FilterComponent;
