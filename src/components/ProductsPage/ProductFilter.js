import React from 'react';
import {ProductConsumer} from "../../context/Context";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  label{
    font-weight: bold;
  }
  .filter-item,
  .filter-price{
    display: block;
    width: 100%;
    border-radius: .2rem;
    border: 2px solid var(--darkGrey);
    background: transparent;
  }
`;

const ProductFilter = () => {
  return (
      <ProductConsumer>
        {
          value => {
            const {handleChange, search, min, max, company, price, shipping, storeProducts} = value;
            /*کد زیر روشی برای بدست اوردن مقادیر که میخواهیم در select به کار رود به صورت ارایه میگیریم*/
            /****start****/
            let companies = new Set();
            companies.add("all");
            for (let product in storeProducts) {
              companies.add(storeProducts[product]["company"]);
            }
            companies = [...companies];
            /****end****/
            return (
                <div className="row my-5">
                  <div className="col-10 mx-auto">
                    <FilterWrapper>
                      {/*search input*/}
                      <div>
                        <label htmlFor="search">search product</label>
                        <input type="text"
                               name="search"
                               id="search"
                               onChange={handleChange}
                               value={search}
                               className="filter-item"/>
                      </div>
                      {/*company input*/}
                      <div>
                        <label htmlFor="company">company</label>
                        <select name="company"
                                id="company"
                                className="filter-item"
                                onChange={handleChange}
                                value={company}>
                          {/*<option value="all">all</option>
                          در اینجا ازین روش استفاده نکردیم روش جدید دیگری امتحان کردیم*/}
                          {/*{
                            storeProducts.map((item, index) => {
                              return(
                                  <option key={index} value={item.company}>{item.company}</option>
                              )
                            })
                          }*/}
                          {
                            companies.map((company, index) => {
                              return (
                                  <option key={index} value={company}>{company}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                      {/*price input range*/}
                      <div>
                        <label htmlFor="price">
                          <p>
                            price product: <span>${price}</span>
                          </p>
                        </label>
                        <input type="range"
                               name="price"
                               id="price"
                               min={min}
                               max={max}
                               onChange={handleChange}
                               value={price}
                               className="filter-price"/>
                      </div>
                      {/*shipping input check*/}
                      <div>
                        <label htmlFor="shipping">
                          <p>
                            free shipping
                          </p>
                        </label>
                        <input type="checkbox"
                               name="shipping"
                               id="shipping"
                               onChange={handleChange}
                               checked={shipping}
                               className="ml-2"/>
                      </div>
                    </FilterWrapper>
                  </div>
                </div>
            )
          }
        }
      </ProductConsumer>
  );
};

export default ProductFilter;