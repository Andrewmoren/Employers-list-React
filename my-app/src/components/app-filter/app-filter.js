import "./app-filter.css";

const AppFilter = () => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Все сотрудники
      </button>
      <button className="btn btn-outline-light" type="button">
        На повышение
      </button>
      <button className="btn btn-outline-light" type="button">
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
