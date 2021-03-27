import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home({ data }) {
    //console.log(data);

    return (
        <Layout>
            <div>
                <header>
                    <h1>DolarPY</h1>
                </header>
                <div className="container">
                    {data.map((item) => {
                        return (
                            <Card
                                banco={item.banco}
                                compra={item.compra}
                                venta={item.venta}
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

    //we are going to add the property of the bank name to the 
    //data array to be able to use it in the card titles
    for (let key = 0; key < banks.length; key++) {
        data[key].banco = banks[key];
    }

    //now we have all the data in one array ready for map()
    return {
        props: {
            data,
        },
    };
}
