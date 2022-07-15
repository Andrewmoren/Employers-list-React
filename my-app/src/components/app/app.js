import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employerslist from "../employers-list/employers-list";
import EmployersAddForm from "../emloyers-add-form/emloyers-add-form";

import "./app.css";

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <Employerslist />
      <EmployersAddForm />
    </div>
  );
}

export default App;
