import "./App.css";
import Cart from "./Components/Cart/Cart";
import Dishes from "./Components/DishesComponents/Dishes";
import AllCategories from "./Filter/AllCategories";

import Filter from "./Filter/Filter";

// app component
function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories />

        <Cart />
        <Filter />
      </div>
      <div className="block">
        <Dishes />
      </div>
    </div>
  );
}

export default App;
