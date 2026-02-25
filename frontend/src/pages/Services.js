import React from "react";

function Services() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "36px", marginBottom: "40px" }}>
        Services Offered
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px"
      }}>
        
        <div style={{
          backgroundColor: "var(--eucalyptus)",
          padding: "30px",
          borderRadius: "12px"
        }}>
          <h3>Individual Therapy</h3>
          <p>
            Support for anxiety, depression, stress, trauma and life transitions.
          </p>
        </div>

        <div style={{
          backgroundColor: "var(--pistachio)",
          padding: "30px",
          borderRadius: "12px"
        }}>
          <h3>Couples Counseling</h3>
          <p>
            Strengthening relationships through guided communication and healing.
          </p>
        </div>

        <div style={{
          backgroundColor: "var(--clay)",
          padding: "30px",
          borderRadius: "12px",
          color: "white"
        }}>
          <h3>Psychological Assessments</h3>
          <p>
            Professional mental health assessments for individuals and institutions.
          </p>
        </div>

        <div style={{
          backgroundColor: "var(--peach)",
          padding: "30px",
          borderRadius: "12px",
          color: "white"
        }}>
          <h3>Corporate Wellness Programs</h3>
          <p>
            Mental health workshops and consultations for organizations.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;