import "./Price.css"
import Button from "../../components/Button/Button"


function Price({ price }) {

    return (
        <div id="price">
            <h2>Total Price</h2>
            <div>
                <b>Fare</b><b>${price}</b>
            </div>
            <div>
                <p>Taxes & Fees</p><p>$35.00</p>
            </div>
            <div>
                <h3>Total</h3>
            </div>
            <hr />
            <div>
                <h1>${price}</h1>
            </div>
            <Button>
                <button>Book</button>
            </Button>
        </div>
    )
}

export default Price
