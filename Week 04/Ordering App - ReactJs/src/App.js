import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import './components/style.css'
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartitems,setcartitems] = useState([]);
  const onAdd = (product) => {
    const exist = cartitems.find((x) => x.id === product.id);
    if (exist) {
      setcartitems(
        cartitems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartitems([...cartitems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartitems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartitems(cartitems.filter((x) => x.id !== product.id));
    } else {
      setcartitems(
        cartitems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countcartItems={cartitems.length}></Header>
      <div className="main">
        <Main onAdd = {onAdd} products={products} ></Main>
        <Basket onAdd = {onAdd} onRemove={onRemove} cartitems={cartitems}></Basket>
      </div>
    </div>
  );
}

export default App;
