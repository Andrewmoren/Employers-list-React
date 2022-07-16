import EployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const Employerslist = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemsProps } = item;
    return <EployersListItem key={id} {...itemsProps} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default Employerslist;
