import { Typography } from 'antd';
import React from "react";
import Sidebar from "../../components/sidebar";
const { Title } = Typography;

function index(props) {
  return (
    <div>
      <Sidebar
        content={
          <div>
              <Title>Barang Didonasikan</Title>
          </div>
        }
      />
    </div>
  );
}

export default index;
