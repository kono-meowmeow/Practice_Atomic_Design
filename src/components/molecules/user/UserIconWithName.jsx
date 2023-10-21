import styled from "styled-components";
import { memo, useContext } from "react";
import { useRecoilValue } from "recoil";

import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name, height, width } = props;
  // useContext()の引数で、どのContextを受け取るのかを指定する
  // useContextを使って、UserContextを取得する
  // UserContextを取得することで、グローバルに参照できる値を参照できる
  // UserContextは、src/providers/UserProvider.jsxで定義している
  // const { userInfo } = useContext(UserContext);

  // 上記と同じことを、Recoilで実装する
  // 更新関数が必要ないときは、useRecoilStateではなく、useRecoilValueを使う
  const userInfo = useRecoilValue(userState);

  // isAdminがtrueであれば、isAdminをtrueにする。userInfoがnullの場合は、falseにする
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage height={height} width={width} src={image} alt={name} />
      <SName>{name}</SName>
      {/* isAdminがtrueであれば編集を表示する */}
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

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
