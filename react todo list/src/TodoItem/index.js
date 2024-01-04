import './index.css';

const TodoItem = (props) => {
  const onToggle = () => {
    props.onToggle(props.id);
  };

  const onDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='todo-item-wrapper'>
      <div>
        <label
          className={`todo-item-label ${props.completed ? 'line-through' : ''}`}
          onChange={onToggle}
        >
          <input
            type='checkbox'
            checked={props.completed}
          />
          <span className='todo-item-content'>{props.content}</span>
        </label>
      </div>

      <div>
        <button
          className='todo-delete-button'
          onClick={onDelete}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
