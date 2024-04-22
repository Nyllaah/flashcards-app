import { useDispatch } from 'react-redux';
import { showAnswer } from '../redux/actions/flashcardActions';

import styles from './css/WordContainer.module.css';

function WordContainer(props: {
  content: string,
  type: 'question' | 'answer',
  visibleAnswer: boolean,
}) {
  const dispatch = useDispatch();
  
  switch (props.type) {
    case 'question':
      return (
        <div
            className={ styles.container }
            onClick={ () => dispatch(showAnswer()) }
            style={ props.visibleAnswer === true ? { height: '50%' } : { height: '100%' } }
          >
            <span>{ props.content }</span>
        </div>
      )
    case 'answer':
      return (
        <div
          className={ styles.container }
          style={{borderTop: '2px solid var(--purple)'}}
        >
          <span>{props.content}</span>
        </div>
      )
  }  
}
export default WordContainer;