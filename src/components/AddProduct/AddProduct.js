import { React, useState, useEffect } from "react";
import "./AddProduct.css";

const AddProduct = (props) => {
    return (
        <div className="container-fluid add-product">
            <div className="row">
                <div className="col-12 filters-item">
                    <h2 className="filter-title">Add products</h2>
                </div>
                <div className="col">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="text"
                    />
                </div>
                <div className="col">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="text"
                    />
                </div>
                <div className="col">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label">
                            Is produkt spozywczy
                        </label>
                    </div>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AddProduct;
