import EployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const Employerslist = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <EployersListItem
        key={id}
        {...itemsProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default Employerslist;
