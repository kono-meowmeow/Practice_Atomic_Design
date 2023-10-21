import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/Input"

// SeachInputというコンポーネントをimportすることで、どこでも検索ボックスが使えるようになる
export const SearchInput = memo(() => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

// divタグ内の要素を横並びにする
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 検索ボタンの左側に余白を設ける
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
