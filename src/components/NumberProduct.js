import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function NumberProduct(props) {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [product, setProduct] = useState(0)

    function num1_handler(e) {
        setNum1(e.target.value)
    }

    function num2_handler(e) {
        setNum2(e.target.value)
    }

    function cal() {
        setProduct(num1/num2);
    }

    return (
        <div>
            <p>First Number: <input type={"number"} id={"num1"} onChange={num1_handler}/></p>
            <p>Second Number: <input type={"number"} id={"num2"} onChange={num2_handler}/></p>
            <p>
                <button id={"calbtn"} onClick={cal}>Calculate Product</button>
            </p>
            <p>Result: <span id={"result"}>{product}</span></p>
        </div>
    );
}

export default NumberProduct;