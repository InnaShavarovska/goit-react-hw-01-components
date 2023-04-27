import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export const Transaction = ({items}) => {
    return (
		<table className={css.table}>
      <thead>
        <tr className={css.thead__tr}>
          <th className={css.table__th}>Type</th>
          <th className={css.table__th}>Amount</th>
          <th className={css.table__th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.table__td}>{type}</td>
              <td className={css.table__td}>{amount}</td>
              <td className={css.table__td}>{currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
 };
