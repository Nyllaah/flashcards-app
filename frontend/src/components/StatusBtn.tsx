import styles from './css/StatusBtn.module.css';

function StatusBtn(props: { action: () => any, status: number }) {
  return (
    <button className={ styles.statusBtn } onClick={ props.action }>{ props.status }</button> 
  )
};

export default StatusBtn;