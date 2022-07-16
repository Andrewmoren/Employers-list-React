import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employerslist from "../employers-list/employers-list";
import EmployersAddForm from "../emloyers-add-form/emloyers-add-form";

import "./app.css";

function App() {
  const data = [
    { name: "Lion J.", salary: 700, increase: false },
    { name: "Alex V.", salary: 3000, increase: true },
    { name: "Andrew M.", salary: 5000, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <Employerslist data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
