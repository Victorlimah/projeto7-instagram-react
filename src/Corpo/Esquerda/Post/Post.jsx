export default function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemPerfil} alt="foto do perfil" />
          {props.usuarioPost}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagemConteudo} alt="foto postada" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtida} alt="foto de quem curtiu" />
          <div class="texto">
            Curtido por <strong>{props.usuarioCurtida}</strong> e{" "}
            <strong>outras {props.numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
