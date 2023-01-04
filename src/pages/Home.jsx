import React from "react";
import Header from "../compononts/Header";
import Layout from "../compononts/Layout";
import List from "../compononts/List";
import Form from "../compononts/Form";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
