import React from "react";

function Achievements() {
  // Example achievements for Dr. Winnie Orodi
  const achievements = [
    {
      title: "PhD Student",
      description: "Currently pursuing a PhD at U.S.I.U Africa."
    },
    {
      title: "Mentorship",
      description: "Mentored kids who are currently doing well in their fields."
    },
    {
      title: "Passionate About Kids",
      description: "Deeply passionate about helping children reach their full potential."
    },
    {
      title: "Academic Excellence",
      description: "Excellent performance in academics and research."
    },
  ];

  return (
    <div className="container achievements-page">
      <h1 style={{ fontSize: "36px", marginBottom: "30px" }}>
        Achievements of Dr. Winnie Orodi
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Dr. Winnie Orodi is a dedicated clinical psychologist and PhD student who combines her passion for children with excellent academic performance and mentorship.
      </p>

      <div className="achievements-cards">
        {achievements.map((item, index) => (
          <div className="card achievement-card" key={index}>
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;