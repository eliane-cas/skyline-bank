import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from "../assets/img/client1.jpg";
import client2 from "../assets/img/client2.jpg";
import client3 from "../assets/img/client3.jpg";
import client4 from "../assets/img/client4.jpg";
import client5 from "../assets/img/client5.jpg";

export const Testimonials = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="section section_testimonials">
      <h2 className="section-heading">What Our Clients Are Saying</h2>
      <Carousel className="carousel" responsive={responsive} infinite={true}>
        <div className="item">
          <div className="testimonial_text">
            <p className="quote">
              "Switching to Skyline Bank was the best decision for my small
              business. The customer service is top-notch, and I love the mobile
              app—everything I need is right at my fingertips. The personalized
              support I receive makes me feel valued, and they’re always there
              to help whenever I have questions. Their instant transfers and
              fee-free international payments have saved me both time and money.
              I’m really happy I made the switch!"
            </p>
            <p className="client">— Jessica M., Small Business Owner</p>
          </div>
          <div className="testimonial_photo">
            <img src={client3} className="testimonial_img"></img>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_text">
            <p className="quote">
              "Skyline Bank's AI-powered budgeting tools have helped me save
              more each month. I’ve tried other banks, but none have offered the
              level of insight and control I get here. It’s like having a
              personal financial advisor in my pocket, and the real-time
              transaction alerts are a lifesaver. The fraud protection gives me
              extra peace of mind, which is so important these days. Skyline
              Bank truly understands the needs of freelancers like me."
            </p>
            <p className="client">— David L., Freelancer</p>
          </div>
          <div className="testimonial_photo">
            <img src={client1} className="testimonial_img"></img>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_text">
            <p className="quote">
              "I was hesitant to switch to an online-only bank, but Skyline Bank
              made the transition effortless. Their interface is so easy to use,
              and I love the personalized savings goals feature—it’s really
              helped me stay on track. I also appreciate how secure I feel with
              all the fraud protection measures in place. It's the best banking
              experience I’ve had, hands down."
            </p>
            <p className="client">— Nina S., Graphic Designer</p>
          </div>
          <div className="testimonial_photo">
            <img src={client4} className="testimonial_img"></img>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_text">
            <p className="quote">
              "As someone who travels frequently for work, I love how easy it is
              to handle international transfers with Skyline Bank. No fees, no
              delays—it’s truly seamless. The app is fast, user-friendly, and
              loaded with features that make my life easier. I've recommended
              Skyline to my colleagues, and they've had nothing but great
              experiences too. It’s a game-changer!"
            </p>
            <p className="client">— Liam T., Sales Executive</p>
          </div>
          <div className="testimonial_photo">
            <img src={client2} className="testimonial_img"></img>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_text">
            <p className="quote">
              "Skyline Bank has completely transformed the way I manage my
              finances. Their real-time transaction alerts keep me on top of
              everything, and the budgeting tools are incredibly intuitive. I've
              never felt more in control of my money. Plus, their customer
              support is always available when I need it, which gives me peace
              of mind."
            </p>
            <p className="client">— Rachel K., Marketing Consultant</p>
          </div>
          <div className="testimonial_photo">
            <img src={client5} className="testimonial_img"></img>
          </div>
        </div>
      </Carousel>
    </section>
  );
};
