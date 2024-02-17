import "./_accordion.scss";
function CreateHiddenContent(props) {
  return (
    <div className="folded-content">
      <p className="text">{props.content}</p>
    </div>
  );
}

export default CreateHiddenContent;
