import Post from "./Post";

export default function Posts() {
  /* Tentei fazer um array com obj dentro de obj 
  mas me enrolei

  Ex: 
  {
    usuario{
      nome: "meowed",
      imagem:"assets/img/meowed.svg",
    },
    conteudo: "assets/img/gato-telefone.svg",
    curtidas{
      usuario: "respondeai",
      imagem: "respondeai",
      quantidade: "101.523",
    },
  };

  Sei que assim é o "padrão" mas me enrolei com as props
  Acho que vou deixar assim, nos próximos eu desenvolvo melhor

  */
  const arrayPost = [
    {
      usuario: {
        nome: "meowed",
        imagem: "assets/img/meowed.svg",
      },
      conteudo: "assets/img/gato-telefone.svg",
      curtidas: {
        usuario: "respondeai",
        imagem: "assets/img/respondeai.svg",
        quantidade: "101.523",
      },
    },
    {
      usuario: {
        nome: "barked",
        imagem: "assets/img/barked.svg",
      },
      conteudo: "assets/img/dog.svg",
      curtidas: {
        usuario: "adorable_animals",
        imagem: "assets/img/adorable_animals.svg",
        quantidade: "99.159",
      },
    },
  ];
  return (
    <div>
      {arrayPost.map((post) => (
        <Post
          imagemPerfil={post.usuario.imagem}
          usuarioPost={post.usuario.nome}
          imagemConteudo={post.conteudo}
          imagemCurtida={post.curtidas.imagem}
          usuarioCurtida={post.curtidas.usuario}
          numeroCurtidas={post.curtidas.quantidade}
        />
      ))}
    </div>
  );
}
