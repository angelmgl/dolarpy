import Card from "../components/card";

export default function Home({ data }) {
    console.log(data);
    return (
        <div>
            <h1>DolarPY</h1>
            <Card />
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch("https://dolar.melizeche.com/api/1.0/");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}
