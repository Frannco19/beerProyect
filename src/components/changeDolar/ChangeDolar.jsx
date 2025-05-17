

const ChangeDolar = ({ dollarValue, setDollarValue }) => {

    const handleChange = (e) => {
        setDollarValue(Number(e.target.value));
    };

    return (
        <div>
            <label>Valor del dólar: </label>
            <input
                type="number"
                value={dollarValue}
                onChange={handleChange}
            />
        </div>
    )
}

export default ChangeDolar