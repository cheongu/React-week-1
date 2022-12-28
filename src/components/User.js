function User(props) {
  return (
    <div>
      <div className="todo-container">
        <h2>{props.user.title}</h2>
        {props.user.body}
        <div className="button-set">
          <button
            className="delete"
            onClick={() => props.Delete(props.user.id)}
          >
            삭제하기
          </button>
          <button
            className="isdone"
            onClick={() => props.isDone(props.user.id)}
          >
            {props.user.isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default User;
