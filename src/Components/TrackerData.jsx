/* eslint-disable react/prop-types */

function Trackerdata({ setFilterMonth, filterMonth }) {
  return (
    <select
      onChange={(e) => setFilterMonth(e.target.value)}
      value={filterMonth}
    >
      <option value="">All Months</option>
      {Array.from({ length: 12 }, (_, i) => (
        <option key={i} value={i}>
          {new Date(0, i).toLocaleString("default", { month: "long" })}
        </option>
      ))}
    </select>
  );
}

export default Trackerdata;
