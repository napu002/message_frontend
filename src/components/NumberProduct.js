import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function NumberProduct(props) {
    const [FirstNumber, setFirstNumber] = useState(0)
    const [SecondNumber, setSecondNumber] = useState(0)
    const [product, setProduct] = useState(0)

    function FirstNumber_handler(e) {
        setFirstNumber(e.target.value)
    }

    function SecondNumber_handler(e) {
        setSecondNumber(e.target.value)
    }

    function cal() {
        setProduct(FirstNumber*SecondNumber);
    }

    return (
        <div>
            <p>First Number: <input type={"number"} id={"num1"} onChange={FirstNumber_handler}/></p>
            <p>Second Number: <input type={"number"} id={"num2"} onChange={SecondNumber_handler}/></p>
            <p>
                <button id={"calbtn"} onClick={cal}>Calculate Product</button>
            </p>
            <p>Result: <span id={"result"}>{product}</span></p>
        </div>
    );
}

export default NumberProduct;