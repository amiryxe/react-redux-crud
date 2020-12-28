import React from "react";
import { Menu } from "antd";

import {
  ReadOutlined,
  PlusSquareOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="posts" icon={<ReadOutlined />}>
        Posts
      </Menu.Item>

      <Menu.Item key="manage" icon={<SettingOutlined />}>
        Manage Posts
      </Menu.Item>

      <Menu.Item key="add" icon={<PlusSquareOutlined />}>
        Add new
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
