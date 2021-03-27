export default function Input({ amount, setAmount }) {
    const handleChange = (e) => {
        let val = Math.round(e.target.value * 100) / 100;
        setAmount(val);
    };

    return (
        <div className="wrapper">
            <label htmlFor="amount">Calcular cantidad:</label>
            <input
                type="number"
                value={amount}
                onChange={handleChange}
                id="amount"
                min="0"
                max="999999999999"
            />
            <small>* ingrese el monto en dólares</small>
        </div>
    );
}
