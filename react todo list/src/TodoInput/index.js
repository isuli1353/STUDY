import { useState } from 'react';
import './index.css';

const TodoInput = (props) => {
  const [content, setContent] = useState('');

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const onSubmit = () => {
    props.onAdd(content);

    setContent('');
  };

  return (
    <div className='todo-input-wrapper'>
      <input
        className='todo-input'
        placeholder='할 일을 입력하세요.'
        value={content}
        onChange={changeContent}
      />

      <button
        className='todo-submit'
        onClick={onSubmit}
      >
        확인
      </button>
    </div>
  );
};

export default TodoInput;
