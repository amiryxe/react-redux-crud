import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../pages/Posts/Posts";
import { Row, Col } from "antd";

const Blog = () => {
  return (
    <Row justify="center">
      <Col span={12}>
        <Navbar />
        <Posts />
      </Col>
    </Row>
  );
};

export default Blog;
