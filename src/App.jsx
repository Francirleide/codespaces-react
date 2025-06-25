import { MyHeader } from "./components/MyHeader";
import { MyMain } from "./components/MyMain";
import { MyFooter } from "./components/MyFooter";
import "./App.css";


export function App() {
  return (
    <div className="app">
      <MyHeader />
      <LuckyNumber />
    </div>
  );
}
