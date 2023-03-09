const Table = ({ children }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      {children}
    </table>
  );
};

export default Table;

export const THead = ({ children }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>{children}</tr>
    </thead>
  );
};

export const TH = ({ children }) => {
  return (
    <th scope="col" className="px-6 py-3 text-slate-300">
      {children}
    </th>
  );
};

export const TBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TR = ({ onClick, children }) => {
  return (
    <tr
      className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

export const TD = ({ children }) => {
  return (
    <td
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {children}
    </td>
  );
};
