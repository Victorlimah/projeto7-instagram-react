import reactDOM from "react-dom";
import FundoMobile from "./FundoMobile/FundoMobile";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <FundoMobile />
    </div>
  );
}

const element = document.querySelector(".root");
reactDOM.render(App(), element);
