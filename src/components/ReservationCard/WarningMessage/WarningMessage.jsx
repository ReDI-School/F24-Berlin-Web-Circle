import { WarningIcon } from '../../../icons/WarningIcon';
import styles from './WarningMessage.module.css';

const WarningMessage = ({ message }) => (
  <div className={styles.warningMessageContainer}>
    {message && (
      <>
        <WarningIcon />
        <div className={styles.warningMessage}>{message}</div>
      </>
    )}
  </div>
);

export default WarningMessage;
