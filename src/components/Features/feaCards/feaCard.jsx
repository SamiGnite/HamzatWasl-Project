import React from "react";
import "./feaCard.css";

export default function feaCard(props) {
  const { feacardIcon, feacardTitle, feacardDescription } = props;
  return (
    <div className="feacard">
      <div className="title-icon">
        <div className="feature-icon">{feacardIcon}</div>
        <span>{feacardTitle}</span>
      </div>
      <div className="feacard-info">{feacardDescription}</div>
    </div>
  );
}
