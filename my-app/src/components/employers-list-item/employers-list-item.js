import "./employers-list-item.css";

const EployersListItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-beetween">
      <span className="list-group-item-label">Andrew Moren</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue="1000$"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EployersListItem;
