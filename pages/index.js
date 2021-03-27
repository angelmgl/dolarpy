import { useState } from 'react';
import Layout from "../components/Layout";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Home({ data }) {
    const [ amount, setAmount ] = useState(1)
    //console.log(data);

    const formatNumber = (number) => {
        let fixed = Math.round((number * amount)*100)/100;
        fixed = fixed.toLocaleString();
        return fixed;
    }

    return (
        <Layout>
            <div>
                <header>
                    <h1>DolarPY</h1>
                </header>
                <Input amount={amount} setAmount={setAmount} />
                <div className="container">
                    {data.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                banco={item.banco}
                                compra={formatNumber(item.compra)}
                                venta={formatNumber(item.venta)}
                                refD={item?.referencial_diario}
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    const res = await fetch("https://dolar.melizeche.com/api/1.0/");
    const json = await res.json();

    //we are going to create two arrays, one for names of the banks
    //another array for the data
    const banks = await Object.keys(json.dolarpy);
    const data = await Object.values(json.dolarpy);

    //we are going to merge the property of the bank name to the 
    //data array to be able to use it in the card titles 
    for (let key = 0; key < banks.length; key++) {
        data[key].banco = banks[key];
    }

    //now we have all the data in one aingle array ready for map()
    return {
        props: {
            data,
        },
    };
}
