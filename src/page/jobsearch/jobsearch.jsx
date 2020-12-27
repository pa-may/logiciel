import React, { useEffect, useState } from "react";
import { results as data } from "../../services/data.json";
import { Link } from "react-router-dom";
import "./jobsearch.css";

const JobSearch = () => {
  const [results, setResults] = useState([]);
  const [displayResults, setDisplayResults] = useState([]);
  const [filter, setFilter] = useState({ area: [], contract: [], salary: [] });
  const [filterList, setFilterList] = useState({});
  const [limit, setLimt] = useState("");
  const [page, setPage] = useState(1);
  const pageLimit = 10;

  const salaryList = {
    "below £50,000": [0, 50000],
    "£50,000 to 70,000": [50000, 70000],
    "£70,000 to 90,000": [70000, 90000],
    "£90,000 to £125,000": [90000, 125000],
    "above £125,000": [125000, 1000000],
  };

  useEffect(() => {
    setResults(data);
    setDisplayResults(data);
    const updateFilters = (field, field2) => {
      let category = [];
      data.forEach((cur) => {
        if (typeof cur[field] === "object") {
          category = [...category, ...cur[field][field2]];
        } else {
          category = [...category, cur[field]];
        }
      });
      category.sort();
      let categoryList = {};
      category.forEach((cur) => {
        if (cur)
          categoryList[cur] = categoryList[cur] ? categoryList[cur] + 1 : 1;
      });
      return categoryList;
    };
    const area = updateFilters("location", "area");
    delete area.UK;
    const contract = updateFilters("contract_type");
    const salary = {};
    Object.entries(salaryList).forEach((cur) => {
      salary[cur[0]] = 0;
      data.forEach((el) => {
        if (el.salary_min <= cur[1][1] && el.salary_max > cur[1][0])
          salary[cur[0]] += 1;
      });
    });
    setFilterList({ area, contract, salary });
  }, []);

  useEffect(() => {
    const current = results.filter((cur) => {
      let area = false || !filter.area.length;
      filter.area.length &&
        cur.location.area.forEach((cur) => {
          if (filter.area.includes(cur)) area = true;
        });
      const contract =
        !filter.contract.length || filter.contract.includes(cur.contract_type);
      let salary = false || !filter.salary.length;
      filter.salary.length &&
        filter.salary.forEach((el) => {
          if (
            cur.salary_min <= salaryList[el][1] &&
            cur.salary_max > salaryList[el][0]
          )
            salary = true;
        });
      return area && contract && salary;
    });
    results.length && setDisplayResults(current);
  }, [filter]);

  const handleOnChange = (e) => {
    const current = { ...filter };
    const [name, value] = e.target.id.split("-");
    if (!current[name]) current[name] = [];
    const index = current[name].indexOf(value);
    if (index + 1) {
      current[name].splice(index, 1);
    } else {
      current[name].push(value);
    }
    setFilter(current);
  };

  return (
    <div className="jobsearch">
      <h1 className="banner-header">Available jobs</h1>
      <div className="jobsearch__fields">
        <div className="job__filter">
          {Object.entries(filterList).map((cur, i) => (
            <div className="filter__container" key={i}>
              <div
                className="filter__header"
                onClick={() =>
                  Object.entries(cur[1]).length > 5 &&
                  setLimt((prev) => (prev !== cur[0] ? cur[0] : ""))
                }
              >
                {cur[0]}
                {Object.entries(cur[1]).length > 5 &&
                  (limit === cur[0] ? (
                    <span className="filter__limit">&or;</span>
                  ) : (
                    <span className="filter__limit">&and;</span>
                  ))}
              </div>
              {Object.entries(cur[1])
                .map((el, i) => (
                  <div className="filter__fields" key={i}>
                    <input
                      id={`${cur[0]}-${el[0]}`}
                      type="checkbox"
                      className="filter__input"
                      onChange={handleOnChange}
                      value={filter[cur[0]]}
                    />
                    <label
                      htmlFor={`${cur[0]}-${el[0]}`}
                      className="filter__label"
                    >
                      {el[0]}
                    </label>
                    <div className="filter__number">({el[1]})</div>
                  </div>
                ))
                .slice(
                  0,
                  limit === cur[0] ? Object.entries(cur[1]).length - 1 : 5
                )}
            </div>
          ))}
        </div>
        <div className="job">
          {displayResults
            .map((cur, i) => (
              <div className="job__container" key={i}>
                <div className="job__header">
                  <div className="">
                    <div className="job__title">{cur.title}</div>
                    <div className="job__company">
                      {cur.company.display_name}
                    </div>
                  </div>
                  <div className="job__sallary">
                    £
                    {cur.salary_min === cur.salary_max
                      ? cur.salary_max
                      : `${cur.salary_min} - £${cur.salary_max}`}
                  </div>
                </div>
                <div className="job__body">
                  <div className="job__description">{cur.description}</div>
                  <div className="job__detail">
                    <div className="job__posted-date">
                      Posted: {Date(cur.created).split("GMT")[0]}
                    </div>
                    <div className="job__location">
                      Location: {cur.location.display_name}
                    </div>
                    <a className="job__btn btn" href={cur.redirect_url}>
                      view details
                    </a>
                  </div>
                </div>
              </div>
            ))
            .slice((page - 1) * pageLimit, page * pageLimit)}
        </div>
      </div>
      <div className="pagination">
        <div
          className="pagination__btn"
          style={page === 1 ? { opacity: 0.5 } : null}
          onClick={() => page > 1 && setPage((prev) => prev - 1)}
        >
          {"<<"} Previous
        </div>
        <div className="pagination__page-container">
          {[...Array(Math.ceil(displayResults.length / pageLimit))].map(
            (cur, i) => (
              <div
                className="pagination__page"
                style={
                  i + 1 === page
                    ? { fontWeight: 900, color: "rgb(245, 81, 81)" }
                    : null
                }
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </div>
            )
          )}
        </div>
        <div
          className="pagination__btn"
          style={
            Math.ceil(displayResults.length / pageLimit) === page
              ? { opacity: 0.5 }
              : null
          }
          onClick={() =>
            page < Math.ceil(displayResults.length / pageLimit) &&
            setPage((prev) => prev + 1)
          }
        >
          Next {">>"}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
