function keypad({ handleChange, Calculate, handleClear }) {
    return (
        <>
            <div className="keypad">
                <div className="row">
                    <button onClick={() => {
                        handleChange("7")
                    }} className="digit">7</button>
                    <button onClick={() => {
                        handleChange("8")
                    }} className="digit">8</button>
                    <button onClick={() => {
                        handleChange("9")
                    }} className="digit">9</button>
                    <button onClick={() => {
                        handleChange("/")
                    }} className="operator">/</button>
                </div>
                <div className="row">
                    <button onClick={() => {
                        handleChange("4")
                    }} className="digit">4</button>
                    <button onClick={() => {
                        handleChange("5")
                    }} className="digit">5</button>
                    <button onClick={() => {
                        handleChange("6")
                    }} className="digit">6</button>
                    <button onClick={() => {
                        handleChange("*")
                    }} className="operator">*</button>
                </div>
                <div className="row">
                    <button onClick={() => {
                        handleChange("1")
                    }} className="digit">1</button>
                    <button onClick={() => {
                        handleChange("2")
                    }} className="digit">2</button>
                    <button onClick={() => {
                        handleChange("3")
                    }} className="digit">3</button>
                    <button onClick={() => {
                        handleChange("-")
                    }} className="operator">-</button>
                </div>
                <div className="row">
                    <button onClick={() => {
                        handleChange("0")
                    }} className="digit">0</button>
                    <button className="functionKey" onClick={() => {
                        Calculate()
                    }} >=</button>
                    <button className="functionKey" onClick={() => {
                        handleClear()
                    }} >c</button>
                    <button onClick={() => {
                        handleChange("+")
                    }} className="operator">+</button>
                </div>
            </div>

        </>
    )
}
export default keypad;