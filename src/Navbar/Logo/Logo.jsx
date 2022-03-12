import IonIcon from "../../Suporte/IonIcon";
import Image from "../../Suporte/Image";

export default function Logo() {
  return (
    <div class="logo">
      <IonIcon name="logo-instagram" />
      <div class="separador"></div>
      <Image src="./assets/img/logo.png" alt="Logo do instagram" />
    </div>
  );
}
