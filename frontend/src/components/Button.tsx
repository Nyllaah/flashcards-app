import styles from './css/Button.module.css';

function Button (props: {content: string, action: () => any}) {
  return (
    <button className={styles.button} onClick={props.action()}>{props.content}</button>
  )
}

export default Button;