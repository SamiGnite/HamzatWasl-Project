import React from "react";
import "./features.css";
import featureImage from "../../utils/images/Group_2.png";
import FeaCard from "./feaCards/feaCard";

export default function features() {
  return (
    <div className="features-container">
      <h2>Awesome Features</h2>

      <div className="features-info">
        <div className="left-cards">
          <FeaCard
            feacardIcon={<i class="fa-solid fa-location-dot"></i>}
            feacardTitle={<h3>Everywhere Access</h3>}
            feacardDescription={
              "But I must explain to you how all this mistaken idea of denouncing pleasure"
            }
          />
          <FeaCard
            feacardIcon={<i class="fa-solid fa-location-dot"></i>}
            feacardTitle={<h3>Everywhere Access</h3>}
            feacardDescription={
              "But I must explain to you how all this mistaken idea of denouncing pleasure"
            }
          />
        </div>

        <div className="middle-picture">
          <img src={featureImage} alt="no pic" />
        </div>
        <div className="right-cards">
          <FeaCard
            feacardIcon={<i class="fa-solid fa-shield"></i>}
            feacardTitle={<h3>High Security</h3>}
            feacardDescription={
              "But I must explain to you how all this mistaken idea of denouncing pleasure"
            }
          />
          <FeaCard
            feacardIcon={<i class="fa-solid fa-cloud-arrow-down"></i>}
            feacardTitle={<h3>Free Download</h3>}
            feacardDescription={
              "But I must explain to you how all this mistaken idea of denouncing pleasure"
            }
          />
        </div>
      </div>
    </div>
  );
}
