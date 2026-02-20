import "./Price.css"
import Button from "../../components/Button/Button"


function Price({ flight }) {

    return (
        <div id="price">
            <h2>Total Price</h2>
            <div>
                <b>Fare</b><b>${flight.price}</b>
            </div>
            <div>
                <p>Taxes & Fees</p><p>${flight.tax_applied}</p>
            </div>
            <div>
                <h3>Total</h3>
            </div>
            <hr />
            <div>
                <h1>${flight.final_price}</h1>
            </div>
            <Button>
                <button>Book</button>
            </Button>
        </div>
    )
}

export default Price
