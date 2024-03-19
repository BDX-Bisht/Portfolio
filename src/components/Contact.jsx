import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="d-flex justify-content-center">
        <h1>Contact</h1>
      </div>
      <form
        action="https://formspree.io/f/xayrdjbd"
        method="post"
        className="px-3"
      >
        <div className="mb-3" data-aos="fade-left" data-aos-duration={1000}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-3" data-aos="fade-right" data-aos-duration={1000}>
          <label htmlFor="name" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3" data-aos="fade-left" data-aos-duration={1000}>
          <label htmlFor="name" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="form-control"
            placeholder="Enter Message"
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            data-aos="fade-left"
            data-aos-duration={1000}
            type="submit"
            className="w-50 btn btn-primary"
            id="form-submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
