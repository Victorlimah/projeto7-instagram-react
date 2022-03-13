import Esquerda from "./Esquerda/Esquerda";
import Sidebar from "./Esquerda/Sidebar/Sidebar";

export default function Corpo() {
  return (
    <div class="corpo">
      <Esquerda />
      <Sidebar />
    </div>
  );
}
