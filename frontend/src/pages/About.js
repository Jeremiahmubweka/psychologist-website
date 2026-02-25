import React from "react";

function About() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        About Dr. Winnie Orodi
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        Dr. Winnie Orodi is a licensed Clinical Psychologist dedicated to 
        helping individuals, families, and organizations achieve emotional 
        wellness and personal growth.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.8", marginTop: "20px" }}>
        With years of experience in therapy, assessment, and mental health 
        advocacy, she provides a safe, confidential and compassionate 
        environment for healing and transformation.
      </p>

      <div style={{
        marginTop: "40px",
        backgroundColor: "var(--clay)",
        padding: "30px",
        borderRadius: "12px",
        color: "white"
      }}>
        <h3>Professional Highlights</h3>
        <ul>
          <li>✔ Licensed Clinical Psychologist</li>
          <li>✔ Specialist in Anxiety & Depression</li>
          <li>✔ Trauma-informed therapy practitioner</li>
          <li>✔ Organizational mental health consultant</li>
        </ul>
      </div>
    </div>
  );
}

export default About;