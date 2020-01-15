import React, { Component, createRef } from "react";
// import axios from "axios";
import API from "./Api";

import "./App.css";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      discountInput: "",
      isDiscounted: false,
      codeValue: ""
    };
    this.removeProduct = this.removeProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.checkDiscount = this.checkDiscount.bind(this);
    this.reset = this.reset.bind(this);
    this.discountInputRef = createRef();
  }

  componentDidMount() {
    API.get("/cart").then(res => {
      this.setState({ products: res.data });
    });
  }

  removeProduct(item) {
    let { products } = this.state;
    let index = products.indexOf(item);
    let a = window.confirm("Press a button!");
    if (a == true) {
      API.delete(`/cart/${item.id}`)
        .then(res => {
          if (index !== -1) {
            this.setState({
              products: [
                ...products.slice(0, index),
                ...products.slice(index + 1)
              ]
            });
          }
        })
        .catch(rej => console.log(rej));
    }
  }

  updateQuantity(item, e) {
    let { products } = this.state;
    let index = products.indexOf(item);
    console.log(index);
    let type = parseInt(e.target.value);
    if (type < 0 && type == "") {
      type = "";
    }
    API.put(`/cart/${item.id}`, { ...item, quantity: type })
      .then(res => {
        this.setState({
          products: [
            ...products.slice(0, index),
            { ...item, quantity: type },
            ...products.slice(index + 1)
          ]
        });
      })
      .catch(rej => console.log(rej));
  }

  checkDiscount(e) {
    e.preventDefault();
    let currentInputVal = this.discountInputRef.current.value;
    this.setState({ discountInput: currentInputVal });
    let discountCode = [
      { discountCodeName: "giamgia1", discountCodeValue: 0.05 },
      { discountCodeName: "giamgia2", discountCodeValue: 0.1 }
    ];
    for (let code of discountCode) {
      if (currentInputVal === code.discountCodeName) {
        this.setState({
          isDiscounted: true,
          codeValue: code.discountCodeValue
        });
        return;
      }
      this.setState({
        isDiscounted: false,
        codeValue: ""
      });
    }
  }

  reset() {
    API.get("/products/?_page=1&limit=3")
      .then(res => {
        let newArr = [];
        for (let i = 0; i < 3; i++) {
          let data = res.data[Math.floor(Math.random() * res.data.length)];
          if (!this.state.products.includes(data)) {
            newArr.push(data);
            API.post("cart", data).catch(err => console.log(err));
          }
        }

        this.setState({ products: newArr });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let { products, isDiscounted, discountInput, codeValue } = this.state;
    let count = 0;
    let subtotal = 0;
    for (let product of products) {
      if (product.quantity) {
        subtotal += product.price * product.quantity;
        count += product.quantity;
      } else {
        subtotal += product.price * 0;
      }
    }

    return (
      <div className="App">
        <CartHeader numberOfItem={count} />
        {count > 0 ? (
          <>
            <CartBody
              items={products}
              removeProduct={this.removeProduct}
              updateQuantity={this.updateQuantity}
            />
            <CartFooter
              codeValue={codeValue}
              discountInput={discountInput}
              isDiscounted={isDiscounted}
              subtotal={subtotal}
              checkDiscount={this.checkDiscount}
              discountInputRef={this.discountInputRef}
              getDiscountInput={this.getDiscountInput}
            />
          </>
        ) : (
          <>
            <p>Không có sản phẩm nào trong giỏ hàng</p>
            <button onClick={this.reset}>Shopping now</button>
          </>
        )}
      </div>
    );
  }
}

export default App;
