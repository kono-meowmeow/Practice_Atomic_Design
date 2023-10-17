import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      {/* コピーライトを記述するには、&copy; を使う */}
      &copy; 2021 test Inc.
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  position: fixed; // 画面の下部に固定する
  bottom: 0; // 画面の下部に固定する
  width: 100%;
`;
