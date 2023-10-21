import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

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

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
