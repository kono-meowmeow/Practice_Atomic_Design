import { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { SearchInput } from "../molecules/SeachInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

// ユーザー情報のダミーデータ
// Array(10)で配列を作り、.keys()でインデックスを取得する
// map()で配列の要素を1つずつ取り出し、valに代入する
// そのvalを使って、idやnameなどのプロパティを作る
const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val+1,
    name: `紫宮${val+1}`,
    image: "https://source.unsplash.com/gKXKBY-C-Dk",
    email: "333@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  }
}));

export const Users = () => {
  // useContext()で、UserContextの値を取得する
  const { userInfo, setUserInfo } = useContext(UserContext);
  // setUserInfoで、isAdminの値を切り替える
  // ただ、このままのコードだと、切り替えボタンを押した際に、関係のないUsersコンポーネントの子コンポーネントまで再レンダリングされてしまう
  // そこで、各子コンポーネントにmemo()を使って、再レンダリングを防ぐ
  const onClickSwitch = () => { setUserInfo({ isAdmin: !userInfo.isAdmin }) }
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => {
          return (
            <UserCard key={user.id} user={user} />
          );
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column; /* 縦並びにする */
  align-items: center; /* 中央寄せ */
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  /* 下記のように書くと、いい感じにレスポンシブになる */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 280px以上の幅があれば、1fr(1分割)にする */
  grid-gap: 20px; /* グリッドの間隔を20pxにする */
`;
