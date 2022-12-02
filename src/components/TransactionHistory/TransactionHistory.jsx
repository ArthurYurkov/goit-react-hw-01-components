import styles from './styles.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thread className={styles.blockTable}>
        <tr>
          <th className={styles.tableHead}>Type</th>
          <th className={styles.tableHead}>Amount</th>
          <th className={styles.tableHead}>Currency</th>
        </tr>
      </thread>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.col}>{type}</td>
            <td className={styles.col}>{amount}</td>
            <td className={styles.col}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
