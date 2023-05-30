import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Customers from "../../components/customers/Customers";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
     
      <Customers />
    </React.Fragment>
  );
};

export default Index;
