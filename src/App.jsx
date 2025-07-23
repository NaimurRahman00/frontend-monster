import CopyInput from "./component/CopyInput";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import ShoppingList from "./component/ShoppingList";
import Counter from "./Counter";
import CounterReducer from "./CounterReducer";
import TodoList from "./TodoList";

const App = () => {
  return (
    <main>
      <Header />
      {/* <Main /> */}
      {/* <Counter/> */}
      {/* <TodoList/> */}
      {/* <ShoppingList/> */}
      {/* <CopyInput/> */}
      <CounterReducer/>
      
      {/* <Footer/> */}
    </main>
  )
};

export default App;