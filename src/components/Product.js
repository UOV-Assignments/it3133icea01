import '../assets/CSS/layout.css';
import {useState} from 'react'
export default function Product(props){
    const price = props.data.price;
    const [item, setItem] = useState({
        name:props.data.name,
        qty:props.data.qty,
        price:0
    });
    console.log(item)
    
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require(`../assets/image/${props.data.img}`)} alt="flower"  />
                <div class="card-body">
                    <h5 class="card-title">{props.data.name} Price:{props.data.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>setItem({...item, qty:e.target.value, price:e.target.value*price})}  />
                    </div>
                    <button class="card-button" onClick={()=> props.cart(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}