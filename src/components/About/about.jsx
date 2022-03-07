import React from "react";
import "./about.css";
import Card from "./cards/card";

export default function about() {
  return (
    <div id="about" className="about-container">
      <div className="about-header">
        <h2>Why Choose us</h2>
        <span>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure
        </span>
        <span>
          and praising pain was born and I will give you a complete account of
          the
        </span>
        <span>system.</span>
      </div>
      <div className="cards-container">
        <Card
          handleIcon={<i class="fa-solid fa-bell"></i>}
          handleTitle={"Awesome Design"}
          handleDescription={
            " But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
          }
        />
        <Card
          handleIcon={<i class="fa-solid fa-bell"></i>}
          handleTitle={"Notification Updates"}
          handleDescription={
            " But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
          }
        />
        <Card
          handleIcon={<i class="fa-solid fa-bell"></i>}
          handleTitle={"Bug Free Code"}
          handleDescription={
            " But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
          }
        />
        <Card
          handleIcon={<i class="fa-solid fa-bell"></i>}
          handleTitle={"24H Support"}
          handleDescription={
            " But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
          }
        />
      </div>
    </div>
  );
}
