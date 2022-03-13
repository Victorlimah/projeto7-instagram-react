import Copyright from "./Copyright";
import Links from "./Links";
import Sugestoes from "./Sugestoes/Sugestoes";
import Usuario from "./Usuario/Usuario";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario
        imagem="assets/img/catanacomics.svg"
        arroba="catanacomics"
        nome="Catana"
      />
      <Sugestoes />
      <Links />
      <Copyright />
    </div>
  );
}
