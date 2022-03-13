import Story from "./Story";
import IonIcon from "../../../Suporte/IonIcon";

export default function Stories() {
  const arrayStories = [
    { src: "assets/img/9gag.svg", alt: "story", usuario: "9gag" },
    { src: "assets/img/meowed.svg", alt: "story", usuario: "meowed" },
    { src: "assets/img/barked.svg", alt: "story", usuario: "barked" },
    {
      src: "assets/img/nathanwpylestrangeplanet.svg",
      alt: "story",
      usuario: "nathanwpylestrangeplanet",
    },
    {
      src: "assets/img/wawawicomics.svg",
      alt: "story",
      usuario: "wawawicomics",
    },
    { src: "assets/img/respondeai.svg", alt: "story", usuario: "respondeai" },
    { src: "assets/img/filomoderna.svg", alt: "story", usuario: "filomoderna" },
    {
      src: "assets/img/memeriagourmet.svg",
      alt: "story",
      usuario: "memeriagourmet",
    },
  ];
  return (
    <div class="stories">
      {arrayStories.map((story) => (
        <Story src={story.src} alt={story.alt} usuario={story.usuario} />
      ))}

      <div class="setinha">
        <IonIcon name="chevron-forward-circle" />
      </div>
    </div>
  );
}
