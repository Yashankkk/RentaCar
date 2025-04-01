import React, { useState } from "react";
import car from '../assets/carr.png'
import { NavLink } from 'react-router-dom';


import {
  PieChartOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  HomeTwoTone,
  SolutionOutlined,
  FileOutlined,
  LockOutlined,
  BlockOutlined,
  FormOutlined,
  MessageOutlined,
  HomeFilled,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Space,
  Dropdown,
  Avatar,

} from "antd";
import User from "../Components/User.jsx";


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const Dashitems = [
  getItem("Dashboard", "Dashboard", <PieChartOutlined />),
  getItem("My Profile", "My Profile", <UserOutlined />),
  getItem("Bookings", "Bookings", <SolutionOutlined />),
  getItem("Exampapers", "Exampapers", <FileOutlined />),
  
  // getItem("Quiz", "Quiz", <FormOutlined />),
  getItem("Review", "Review", <MessageOutlined />),
  getItem("Report", "Report", <BlockOutlined />),
  getItem("Terms&Policy", "Terms&Policy", <LockOutlined />,


   ),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState(["Home"]);
  const [currentPath, setCurrentPath] = useState("OnlineRegistration");
  console.log(currentPath)
  const [selectedItems, setSelectedItems] = useState([]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (item) => {
    console.log("ja baba di ",item);
    const newPath = item.key;
    setBreadcrumb([breadcrumb[0], newPath]);
    setCurrentPath(newPath);
  };

  const handleLogout = () => {
    localStorage.removeItem("user-info");
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },

    {
      key: "2",
      danger: true,
      label: (
      <NavLink to="/login" onClick={handleLogout} style={{ color: "red" }}>
        Log out
      </NavLink>
    ),
    },
  ];
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
    
   <Sider width="250px" trigger={null} collapsible collapsed={collapsed}>
  <div className="flex gap-4 items-center justify-center !my-6 h-25 ">
    <img src={car} alt="Logo" className="w-12 h-12" />
    <div className="">
      <p className="text-[20px] font-[600] text-white">RideEase</p>
    </div>
  </div>
  <Menu
    theme="dark"
    defaultSelectedKeys={["1"]}
    mode="inline"
    items={Dashitems}
    onClick={handleMenuClick}
  />
</Sider>
      
      <Layout>
        <Header
          style={{
            paddingRight: "30px",
            background: colorBgContainer,
            justifyContent: "space-between",
            display: "flex",
          }}
        >
 
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                marginLeft: 15,
                marginRight: 15,
                width: 30,
                height: 30,
              }}
            />
            
  
     <div>
      <p style={{fontSize:"18px"}}>Welcome, <span style={{fontSize:"14px",fontWeight:700}}>Members</span></p>
     </div>
     </div> 

          <Dropdown menu={{ items }} className="!mx-5">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar size="large" icon={<UserOutlined />} />
                <p>YASH</p>

                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <HomeTwoTone className="!mx-2" />
            {breadcrumb.map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            style={{
              // padding: 14,
              border: "1px solid rgb(217 216 213)",
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {currentPath === "Dashboard" ? (
              <p>Dashboard content</p>
            ) : currentPath === "Registration" ? (
              <User />
            ):null}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©{new Date().getFullYear()}{" "}
          <a href="https://maccotech.in/">RideEase </a> 
          All right reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;