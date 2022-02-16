import { React, useState, useEffect } from "react";
import "./FilterComponent.css";

const FilterComponent = (props) => {
    const {
        products,
        handleFilterInput,
        handleFilterCategory,
        handleFIlterReset,
    } = props;

    const resetFilter = (element, callback) => {
        callback(element);
    };

    return (
        <div className="container-fluid filter">
            <div className="row">
                {}
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
                        {products.map((el, index) => (
                            <option key={index} value={el}>
                                {el}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onChange={() => {
                            handleFIlterReset();
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FilterComponent;
