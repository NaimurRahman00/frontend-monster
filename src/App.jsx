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
import Recommended from "./recommended/Recomended";

const App = () => {
  return (
    <main>
      <Nav />
      <Products />
      <Recommended/>

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
