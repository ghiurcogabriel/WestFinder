import React, { useState } from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import CartContext from "../../ContextApi/cart/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  console.log(cartItems);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [payByCard, setPayByCard] = useState(false);
  //card inputs
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardExpirations, setCardExpirations] = useState("");

  const sendOrder = () => {
    console.log("order sended");
  };

  const removeItems = () => {
    const items = cartItems?.map((item) => {
      return removeFromCart(item.id);
    });
    return items
  };

  return (
    <div className="check-out-container">
      <div className="check-out">
        <form onSubmit={sendOrder} className="form-check-out">
          <div className="check-out-inputs">
            <div className="check-div1">
              <label htmlFor="name">
                <span>Name: </span>
                <input
                  name="name"
                  className="check-out-input"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  required
                  placeholder="Add the entire name"
                />
              </label>
              <label htmlFor="mobile">
                <span>Mobile phone number:</span>
                <input
                  name="mobile"
                  className="check-out-input"
                  type="text"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  value={mobile}
                  required
                  placeholder="+0700 000 000"
                />
              </label>
              <label htmlFor="email">
                <span>Email address </span>
                <input
                  name="email"
                  className="check-out-input"
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required
                  placeholder="email.address@mail.com"
                />
              </label>
              <label htmlFor="country">
                <span>Country: </span>
                <input
                  name="country"
                  className="check-out-input"
                  type="text"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  value={country}
                  required
                  placeholder="Romania"
                />
              </label>
            </div>

            <div className="check-div2">
              <label htmlFor="city">
                <span>City: </span>
                <input
                  name="city"
                  className="check-out-input"
                  type="text"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                  required
                  placeholder="Cluj-NApoca"
                />
              </label>
              <label>
                <span>Address: </span>
                <input
                  className="check-out-input"
                  type="text"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                  required
                  placeholder="Street, number, apartment etc"
                />
              </label>
              <label>
                <span>Postal Code: </span>
                <input
                  className="check-out-input"
                  type="text"
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                  }}
                  value={postalCode}
                  required
                  placeholder="400000"
                />
              </label>
            </div>
          </div>

          <button
            className="card-button"
            onClick={() => {
              setPayByCard(!payByCard);
            }}
          >
            Pay by Card
          </button>

          {payByCard && (
            <div className="card-checkout-container">
              <div className="card-checkout">
                <label>
                  <span>Card Name</span>
                  <input
                    className="check-out-input"
                    type="text"
                    onChange={(e) => {
                      setCardName(e.target.value);
                    }}
                    value={cardName}
                    required
                    placeholder="John Doe"
                  />
                </label>
                <label>
                  <span>Card number</span>
                  <input
                    className="check-out-input"
                    id="ccn"
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    // autocomplete="cc-number"
                    maxlength="19"
                    placeholder="4242 4242 4242 4242"
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                    value={cardNumber}
                    required
                  />
                </label>
              </div>

              <div className="card-checkout">
                <label>
                  <span>Card CVC</span>
                  <input
                    className="check-out-input"
                    type="text"
                    onChange={(e) => {
                      setCardCvc(e.target.value);
                    }}
                    value={cardCvc}
                    required
                    placeholder="123"
                  />
                </label>
                <label>
                  <span>Card Expiration Date</span>
                  <input
                    className="check-out-input"
                    type="date"
                    onChange={(e) => {
                      setCardExpirations(e.target.value);
                    }}
                    value={cardExpirations}
                    //  required
                    //  placeholder="dd/mm/yyyy"
                  />
                </label>
              </div>
            </div>
          )}
          <Link to="/checkout/orderPlaced">
            <button className="card-button" onClick={() => removeItems()}>
              Send order
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
