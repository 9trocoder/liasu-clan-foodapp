import React from "react";

function FoodTray({ suggestion, suggestionlabel }) {
  return (
    <>
      <div className="suggestion__cnt">
        <p className="suggestion">{suggestion}</p>
        <p className="suggestionlabel">({suggestionlabel})</p>
      </div>

      <div className="foodtray__cnt">
        <div className="foodtray__cnt-items">
            <img src="https://images.unsplash.com/photo-1638436684761-7e59f8a9072f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
        </div>
        <div className="foodtray__cnt-items">
            <img src="https://images.unsplash.com/photo-1629606600908-a51ec6c44fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt="" />
        </div>
      </div>
    </>
  );
}

export default FoodTray;
