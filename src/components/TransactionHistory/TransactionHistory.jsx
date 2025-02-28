import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          let type = item.type;
          type = type[0].toUpperCase() + type.slice(1, type.length);

          return (
            <tr
              key={item.id}
              className={(index + 1) % 2 == 0 ? css.trEven : css.trOdd}
            >
              <td>{type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
