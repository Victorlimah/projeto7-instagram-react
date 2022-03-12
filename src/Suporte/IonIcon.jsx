export default function IonIcon(props) {
  return (
    <ion-icon
      name={props.name}
      role="img"
      class="md hydrated"
      aria-label={props.name}
    ></ion-icon>
  );
}
