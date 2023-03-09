const DescriptionList = ({ children }) => {
  return (
    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mt-[-1rem]">
      {children}
    </dl>
  );
};

export default DescriptionList;

export const Description = ({ lable, value }) => {
  return (
    <div className="flex flex-col pb-4">
      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 pt-4">
        {lable}
      </dt>
      <dd className="text-lg font-semibold">{value}</dd>
    </div>
  );
};
