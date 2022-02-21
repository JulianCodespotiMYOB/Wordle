export function CreateHeader(props) {
  function createHeader() {
    return (
      <div className={props.className}>
        <h1>{props.text}</h1>
      </div>
    );
  }
  return <div>{createHeader()}</div>;
}
