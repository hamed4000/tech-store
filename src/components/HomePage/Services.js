import React, {Component} from 'react';
import {FaDolly, FaRedo, FaDollarSign} from "react-icons/fa";
import styled from "styled-components";

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;


class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly/>,
        title: "تحویل رایگان",
        text:
            "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. "
      },
      {
        id: 2,
        icon: <FaRedo/>,
        title: "گارانتی بازگشت وجه 30روز",
        text:
            "کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت "
      },
      {
        id: 3,
        icon: <FaDollarSign/>,
        title: "پرداخت امن",
        text:
            "بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید "
      }
    ]
  };

  render() {
    return (
        <ServicesWrapper className="py-5">
          <div className="container">
            <div className="row">
              {
                this.state.services.map(item => (
                    <div
                        className="col-10 col-sm-6 col-md-4  mx-auto text-center my-3"
                        key={item.id}
                    >
                      <div className="service-icon">{item.icon}</div>
                      <div className="mt-3 text-capitalize font-weight-bold">{item.title}</div>
                      <div className="mt-3">{item.text}</div>
                    </div>
                ))
              }
            </div>
          </div>

        </ServicesWrapper>
    );
  }
}

export default Services;