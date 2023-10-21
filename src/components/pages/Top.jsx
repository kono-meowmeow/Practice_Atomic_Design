import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import axios from "axios";

export const Top = () => {
  const navigate = useNavigate();

  // const { setUserInfo } = useContext(UserContext);

  // 上記と同じことを、useSetRecoilState()を使って書き換える
  // 値は必要ないが更新関数だけが必要なときは、useSetRecoilState()を使う
  // 更新関数だけを受け取るuseSetRecoilState()は、再レンダリングを起こさない
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    // adminユーザーの場合は、isAdminをtrueにする
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    // 一般ユーザーの場合は、isAdminをfalseにする
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };

  const onClickUsers = () => {
    // axios.get("URL")で、URLのデータを取得する
    // then()で、通信に成功した場合の処理を書く
    // then()の引数resには、レスポンスのデータが入ってくる
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("通信に成功しました");
      // resのdataプロパティに、取得したデータが入っている
      console.log(res.data);
      // エラーが起きた場合は、catch()の引数errにエラーの内容が入ってくる
    }).catch((err) => {
      console.log("通信に失敗しました");
      console.log(err);
    });
  };
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      console.log("通信に成功しました");
      console.log(res.data);
    }).catch((err) => {
      console.log("通信に失敗しました");
      console.log(err);
    });
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <hr />
      <h2>データの取得</h2>
      <SecondaryButton onClick={onClickUsers}>users</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickUser1}>id=1のuser</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
