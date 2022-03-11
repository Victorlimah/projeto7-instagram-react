import Icones from "./Icones/Icones";
import IconesMobile from "./Icones/IconesMobile";
import Logo from "./Logo/Logo";
import LogoMobile from "./Logo/LogoMobile";
import BarraPesquisa from "./Pesquisa/BarraPesquisa";
import TextMobile from "./Pesquisa/TextMobile";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />

        <TextMobile />
        <BarraPesquisa />

        <Icones />
        <IconesMobile />
      </div>
    </div>
  );
}
