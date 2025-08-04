import CopyInput from "./component/CopyInput";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import ShoppingList from "./component/ShoppingList";
import Counter from "./component/Counter";
import CounterReducer from "./component/CounterReducer";
import CustomHook from "./component/CustomHook";
import FocusInput from "./component/FocusInput";
import Timer from "./component/Timer";
import TodoList from "./component/TodoList";
import UniqueId from "./component/UniqueId";
import Meals from "./component/Meals";
import HiddenSearchBar from "./component/HiddenSearchBar";
import Form from "./component/Form";
import Nav from "./navigation/nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import data from "./db/data";
import Card from "./component/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // INPUT FILTER
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filteredItems = data.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // RADIO FILTER
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // BUTTONS FILTER
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // FILTERING INPUT ITEMS
    if (query) {
      filteredProducts = filteredItems;
    }

    // SELECTED FILTERS
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };

  const result = filteredData(data, selectedCategory, query);

  return (
    <main className="max-w-6xl m-auto">
      <Sidebar
        selectedCategory={selectedCategory}
        handleChange={handleChange}
      />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />

      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Counter/> */}
      {/* <TodoList/> */}
      {/* <ShoppingList/> */}
      {/* <CopyInput/> */}
      {/* <CounterReducer/> */}
      {/* <FocusInput/> */}
      {/* <Footer/> */}
      {/* <Timer/> */}
      {/* <CustomHook/> */}
      {/* <UniqueId /> */}
      {/* <Meals/> */}
      {/* <HiddenSearchBar/> */}
      {/* <Form/> */}
    </main>
  );
};

export default App;
