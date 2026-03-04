import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home-hero">
      {/* Left Side: Text */}
      <div className="hero-text">
        <h1>Brief History about your Therapist</h1>

        {/* Full Biography */}
        <p>
          Hi, my name is <strong>Winnie Orodi</strong>, a therapist from Nairobi, Kenya. 
          I've been passionate about understanding the human mind since I was 17, 
          and even after completing my bachelor's degree in psychology at USIU many years ago, 
          I was still left with a hunger to find out more. To learn why we are the way we are. 
          This led me to pursue a postgraduate degree in Clinical Psychology. 
          As much as I wanted to understand the human mind, more importantly, I wanted to understand myself. 
          The road of self-discovery to self-actualization has been long and challenging, but beautiful.
        </p>

        <h3>Early Life</h3>
        <p>
          When I was in high school, I was convinced that I would become a pediatrician. 
          It wasn’t until year 12 that I realized that math, chemistry, and biology were not my calling. 
          I had initially selected four classes for my A-levels, including psychology, 
          but dropped it to focus on subjects more aligned with medicine. 
          However, the classes I had attended before I dropped the subject fascinated me. 
          I couldn’t stop thinking about everything I had learned. 
          Things were only starting to get interesting, and I was finally learning about topics 
          that could help me help myself.
        </p>

        <p>
          The countless hours I spent reading articles like “53 Signs He Likes You” didn’t help me realize 
          that until I resolved the internal issues caused by my dysfunctional relationship with my father, 
          I would only self-sabotage my romantic relationships. 
          Articles on study hacks didn’t address struggles like ADHD, social anxiety, or concentration issues. 
          It was my thirst for knowledge, and the yearning to make sense of my thoughts, feelings, and emotions, 
          that led me to pursue a degree in Psychology. 
          From then on, I knew I wanted to work with children, families, and individuals affected by childhood trauma.
        </p>

        <h3>Career History</h3>
        <p>
          Over the past few years, I've had the privilege of working with an NGO dedicated to serving Kenyan youth. 
          My role focused on enhancing the capacity of clinical caregivers to provide competent care. 
          Addressing the mental health needs of Kenya’s youth is crucial, as research shows depression and anxiety are most prevalent. 
        </p>

        <p>
          Initially, I worked on program delivery—overseeing a four-week mental health intervention in Kenyan public high schools. 
          This intervention effectively reduced symptoms of depression and anxiety while increasing overall well-being. 
          I later led training for 100+ clinical supervisors and 1,000+ lay providers. 
          Today, the intervention has reached over 100,000 students.
        </p>

        <h3>Winnie Orodi Therapy</h3>
        <p>
          Starting my private practice has been a full-circle moment. I’ve worked with clients to heal childhood trauma, 
          reduce anxiety and depression, cope with grief, and resolve relationship and family conflicts. 
          My approach is holistic, client-centered, and family-systems-based, incorporating techniques such as 
          solution-focused therapy, narrative therapy, experiential therapy, and cognitive-behavioral therapy (CBT). 
          Using multiple interventions ensures positive and lasting change.
        </p>

        {/* Catchy Hook */}
        <p className="hook">
          Choose Winnie Orodi Therapy to start your journey toward emotional resilience and mental clarity.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <Link to="/book">
            <button className="btn btn-primary">Book Appointment</button>
          </Link>

          <Link to="/services">
            <button className="btn btn-secondary">View Services</button>
          </Link>
        </div>
      </div>

      {/* Right Side: Professional Image */}
      <div className="hero-image-container">
        <img
          src="/doctor.jpg.jpeg"
          alt="Winnie Orodi"
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default Home;