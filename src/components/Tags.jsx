const Tags = ({ tags }) => {
  return (
    <div className="tag-div">
      {tags.map((tag) => {
        return (
          <span className="tag" key={`${tag}`}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
