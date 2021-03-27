import Card from "../components/card";

export default function Home({ data }) {
    console.log(data);

    return (
        <div>
            <h1>DolarPY</h1>
            {
                data.map(item => {
                    return <Card
                    banco={item.banco}
                    compra={item.compra}
                    venta={item.venta}
                    refD={item?.referencial_diario}
                    />
                })
            }
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch("https://dolar.melizeche.com/api/1.0/");
    const json = await res.json();
    const banks = await Object.keys(json.dolarpy);
    const data = await Object.values(json.dolarpy);

    for(let key = 0; key < banks.length; key++) {
        data[key].banco = banks[key];
    }

    return {
        props: {
            data,
        },
    };
}
