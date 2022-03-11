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

/* 
    Navbar {
      logo
      logo-mobile
      instagram-mobile
      pesquisa
      icones
      icones-mobile
    }

    Corpo{

    }

    fundo-mobile{

    }



*/

const element = document.querySelector(".root");
reactDOM.render(App(), element);
