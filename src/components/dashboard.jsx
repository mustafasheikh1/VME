import React, { Component } from "react";
import DashboardCards from "./common/dashboardCards";
class DashBoard extends Component {
  state = {
    cards: [
      { name: "Users", value: 18 },
      { name: "Reports", value: 7 },
      { name: "Cars", value: 87 },
    ],
  };
  render() {
    const { cards } = this.state;
    return (
      <React.Fragment>
        <div className="dash-title">
          <h1>Dashboard</h1>
          <main>
            <div className="dash-cards">
              {cards.map((card) => (
                <DashboardCards
                  key={card.name}
                  name={card.name}
                  value={card.value}
                />
              ))}
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoard;
