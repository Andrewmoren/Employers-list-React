import EployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const Employerslist = () => {
  return (
    <ul className="app-list list-group">
      <EployersListItem />
      <EployersListItem />
      <EployersListItem />
    </ul>
  );
};

export default Employerslist;
