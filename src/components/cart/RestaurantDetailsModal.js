import React from "react";

export default function RestaurantDetailsModal({
  restaurant,
  modalDetailsDisplay,
  setDetailsDisplay
}) {
  return (
    <div id="detalii" className="modal_container">
      <div className="modal-detalii-container">
        <span
          className="close-restaurant-modal"
          onClick={() => {
            setDetailsDisplay(false);
          }}
        >
          &times;
        </span>
        <img
          src={require(`./../../img/${restaurant.image}`)}
          alt={restaurant.name}
        />{" "}
        <h2 className="modal-detalii-title">{restaurant.name}</h2>
        <div className="modal-detalii">
          <div className="modal-detalii-content">
            <h2>Adresă</h2>
            <p>{restaurant.adress}</p>
          </div>
          <div className="modal-detalii-content">
            <h2>Date societate</h2>
            <p>{restaurant.company_data}</p>
          </div>
          <div className="modal-detalii-content">
            <h2>Program</h2>
            <table>
              <tbody>
                {restaurant.working_time.map(orar => (
                  <tr key={orar.day}>
                    <td>{orar.day}</td>
                    <td className="restaurant-ora">{orar.open}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
