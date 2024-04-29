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
        <input type="text" name="deck-name" id="deck-name" placeholder='New Deck name' />
        <select name="language" id="language" >
          <option disabled selected>Select the input language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="japanese">Japanese</option>
          <option value="portuguese">Brazilian Portuguese</option>
        </select>
        <select name="language" id="language" >
          <option disabled selected>Select the output language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="japanese">Japanese</option>
          <option value="portuguese">Brazilian Portuguese</option>
        </select>
        <textarea
          className={ styles.textarea }
          name="text-to-flashcard"
          id="text-to-flashcard"
          cols={30}
          rows={15}
          onChange={ handleChange }
          placeholder='Paste the source text here'
          />
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