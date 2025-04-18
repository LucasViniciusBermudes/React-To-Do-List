function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} //todas as props que eu passar para o input vao ser passadas para esse input, o type, placeholder, value...
    />
  );
}
export default Input;
