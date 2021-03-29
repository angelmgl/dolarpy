export default function Input({ amount, setAmount }) {
    const handleChange = (e) => {
        // let val = Math.round(e.target.value * 100) / 100;
        //Cuando al borrar los datos del input para ingresar una nueva cantidad  
        //el resultado es ("" * 100) / 100) = 0
        //dejando el formato 0nuevacantidad,
        //actualizando el estado con el value ingresado, el value se resetea 
        //y se puede ingresar una nueva cantidad sin el 0 antes de la cantidad 
        setAmount(e.target.value);
    };

    const handleClick = (e) => {
        e.target.value = ""
    }

    return (
        <div className="wrapper">
            <label htmlFor="amount">Calcular cantidad:</label>
            <input
                type="number"
                value={amount}
                onChange={handleChange}
                onClick={handleClick}
                id="amount"
                min="0"
                max="999999999999"
            />
            <small>* ingrese el monto en dólares</small>
        </div>
    );
}
