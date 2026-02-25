import React from "react";

function Contact() {
  return (
    <div className="container">
      <h1>Contact Information</h1>

      <div style={{ marginTop: "30px", fontSize: "18px", lineHeight: "1.8" }}>
        <p><strong>Email:</strong> winnieskypal@gmail.com</p>
        <p><strong>Phone:</strong> +254723831726</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
      </div>

      <div style={{
        marginTop: "40px",
        backgroundColor: "var(--eucalyptus)",
        padding: "30px",
        borderRadius: "12px"
      }}>
        <h3>Office Hours</h3>
        <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
        <p>Saturday: By Appointment Only</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
}

export default Contact;