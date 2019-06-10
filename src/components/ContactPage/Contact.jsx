// در اینجا برای فرممون از سایت formpree.io استفاده کردیم

import React from "react";
import Title from "../Title";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="تماس با ما" center />
            <form
              className="mt-5"
              action="https://formspree.io/braddock.crawford@bullbeer.org"
              method="POST"
            >
              {/* first */}
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="john smith"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email@email.com"
                />
              </div>
              {/* subject */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="important!!!!"
                />
              </div>
              {/* message */}
              <div className="form">
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="hello there buddy"
                />
              </div>
              {/* submit */}
              <div className="form-group mt-3">
                <input className="form-control bg-primary text-white" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
