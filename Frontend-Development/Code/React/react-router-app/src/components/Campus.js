// Developer: Roderick Bernardo
// Purpose: React router demo

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const allowedCampus = ["casaloma", "stjames", "waterfront"];

function Campus() {
  const { campusId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!allowedCampus.includes(campusId)) {
      navigate("/NotFound");
    }
  }, [campusId, navigate]);

  const imgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div class="section">
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">GBC Campus</p>
            </header>
            <div class="card-content">
              <div class="content">
                <img
                  style={imgStyles}
                  src={`${process.env.PUBLIC_URL}/images/${campusId}.jpg`}
                  alt="GBC campus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campus;
