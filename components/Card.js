export default function Card({ banco, compra, venta, refD }) {
    return (
        <div className="card">
            <h2>{banco}</h2>
            <div className="card-body">
                <p>Compra: {compra} Gs</p>
                <p>Venta: {venta} Gs</p>
                {refD ? <p>Ref del día: {refD} Gs</p> : ""}
            </div>
        </div>
    );
}