import reactDOM from "react-dom";
import Corpo from "./Corpo/Corpo";
import FundoMobile from "./FundoMobile/FundoMobile";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Corpo />
      <FundoMobile />
    </div>
  );
}

const element = document.querySelector(".root");
reactDOM.render(App(), element);
