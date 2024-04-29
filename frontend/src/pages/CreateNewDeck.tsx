import { useState } from 'react';
import Button from '../components/Button';
import styles from './css/CreateNewDeck.module.css';
import { cleanWords, formatSentences } from '../helpers';

function CreateNewDeck() {
  const [text, setText] = useState('');
  const [byWords, setByWords] = useState(true);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleClick = () => {
    const method = byWords ? ' ' : '.';
    let cards = text.split(method);
    if (byWords === true) {
      cards = cleanWords(cards);
    } else {
      cards = formatSentences(cards);
    }
    console.log(cards);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    
    if (id === 'by-words') {
      setByWords(true);
    } else {
      setByWords(false)
    }
  };
  
  return (
    <div className={ styles.container }>
      <h2>Create New Deck</h2>
      <form className={ styles.form } >
        <label htmlFor="deck-name">Deck name:
          <input type="text" name="deck-name" id="deck-name" />
        </label>
        <label>Select the input language:
          <select name="language" id="language">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="japanese">Japanese</option>
            <option value="portuguese">Spanish</option>
          </select>
        </label>
        <label>Select the output language:
          <select name="language" id="language">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="japanese">Japanese</option>
            <option value="portuguese">Spanish</option>
          </select>
        </label>
        <label className={ styles.p } >Paste the source text below:
          <textarea
            className={ styles.textarea }
            name="text-to-flashcard"
            id="text-to-flashcard"
            cols={30}
            rows={15}
            onChange={ handleChange }
            />
        </label>
        <section className={styles.methodContainer}>
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
      </form>
      <Button action={ handleClick } content={'Create'} />
    </div>
  );
};

export default CreateNewDeck;