import Post from "./Post";

export default function Posts() {
  const arrayPost = [
    {
      imagemPerfil: "assets/img/meowed.svg",
      usuarioPost: "meowed",
      imagemConteudo: "assets/img/gato-telefone.svg",
      imagemCurtida: "assets/img/respondeai.svg",
      usuarioCurtida: "respondeai",
      numeroCurtidas: "101.523",
    },
    {
      imagemPerfil: "assets/img/barked.svg",
      usuarioPost: "barked",
      imagemConteudo: "assets/img/dog.svg",
      imagemCurtida: "assets/img/adorable_animals.svg",
      usuarioCurtida: "adorable_animals",
      numeroCurtidas: "99.159",
    },
  ];
  return (
    <div>
      {arrayPost.map((post) => (
        <Post
          imagemPerfil={post.imagemPerfil}
          usuarioPost={post.usuarioPost}
          imagemConteudo={post.imagemConteudo}
          imagemCurtida={post.imagemCurtida}
          usuarioCurtida={post.usuarioCurtida}
          numeroCurtidas={post.numeroCurtidas}
        />
      ))}
    </div>
  );
}
