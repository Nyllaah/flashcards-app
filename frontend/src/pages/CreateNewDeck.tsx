import { useState } from 'react';
import Button from '../components/Button';
import styles from './css/CreateNewDeck.module.css';

function CreateNewDeck() {
  const [text, setText] = useState('');
  const [byWords, setByWords] = useState(true);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleClick = () => {
    const method = byWords ? ' ' : '.';
    const cards = text.split(method);
    console.log(cards);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    
    if (id === 'by-words') {
      setByWords(true);
    } else {
      setByWords(false)
    }
  }
  
  return (
    <div className={ styles.container }>
      <h2>Create New Deck</h2>
      <section className={ styles.textContainer } >
        <p className={ styles.p } >Paste the text below to create a new flashcard deck from it.</p>
        <textarea
          className={ styles.textarea }
          name="text-to-flashcard"
          id="text-to-flashcard"
          cols={30}
          rows={15}
          onChange={ handleChange }
        />
      </section>
      <section>
        <label htmlFor="by-words">
          <input
            type="radio"
            name='method'
            id='by-words'
            checked={ byWords }
            onChange={ handleInput }
          />
          Separate by words
        </label>
        <label htmlFor="by-sentences">
          <input
            type="radio"
            name='method'
            id='by-sentences'
            onChange={ handleInput }
          />
          Separate by sentences
        </label>
      </section>
      <Button action={ handleClick } content={'Create'} />
    </div>
  )
}

export default CreateNewDeck;