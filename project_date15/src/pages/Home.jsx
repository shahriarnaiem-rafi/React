import { useState } from "react";

const Home = () => {
    const [price, setPrice]=useState(0);
    const incrise=()=>{
        setPrice(price+1);
    }
    const decrise=()=>{
        setPrice(price-1);    }
    return (
        <div>
                <h2>Count {price}</h2>
            <button onClick={incrise}>Incrise</button>
            <button onClick={decrise}>Decrise</button>
        </div>
    );
};

export default Home;