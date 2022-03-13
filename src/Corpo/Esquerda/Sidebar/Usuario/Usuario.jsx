export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.imagem} alt="foto do usuario" />
      <div class="texto">
        <strong>{props.arroba}</strong>
        {props.nome}
      </div>
    </div>
  );
}
