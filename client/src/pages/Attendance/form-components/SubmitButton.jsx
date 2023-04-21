import styles from './SubmitButton.module.css'

export default function SubmitComponent({ children, onClick }) {
  return (
    <>
      <button className={styles.submit_button}
      onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}