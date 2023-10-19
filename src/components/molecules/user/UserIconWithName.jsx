import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name, height, width, isAdmin } = props;
  // useContextを使って、UserContextを取得する
  // UserContextを取得することで、グローバルに参照できる値を参照できる
  // UserContextは、src/providers/UserProvider.jsxで定義している
  const context = useContext(UserContext);
  console.log(context);

  return (
    <SContainer>
      <SImage height={height} width={width} src={image} alt={name} />
      <SName>{name}</SName>
      {/* isAdminがtrueであれば編集を表示する */}
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center; // 中央寄せ
`;

const SImage = styled.img`
  border-radius: 50%; // 画像を丸くする
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
