//import the hooks
import { useState, useEffect } from "react";

//make the function, here the parameters are not optional but it is "currency";
function useCurrencyInfo (currency){

    //useState is used to store data in data variable through setData
    const [data, setData] = useState({});

    //I want that when the hook use, then function call the api, so we use useEffect
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo;