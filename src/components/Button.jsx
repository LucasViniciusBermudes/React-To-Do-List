function Button(props) {
  return (
    <button {...props} className="bg-slate-400 p-2 rounded-md text-white">
      {props.children}
    </button>
  ); //a children nesse caso é o conteudo do botao, o seja, o texto
}
export default Button;
