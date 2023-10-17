import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
`;

// 既存のコンポーネントにstyleを当てるには、styled(コンポーネント名)という風に書く
const SLink = styled(Link)`
  margin: 0px 8px;
`;
