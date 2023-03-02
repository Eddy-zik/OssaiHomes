import './grid.scss';
import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(message);
  };

  return (
    <div>
      <label htmlFor="message">My Textarea</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
      />
    </div>
  );
};

export default App;
// We used the useState hook to store the value of the textarea element in the component's state.