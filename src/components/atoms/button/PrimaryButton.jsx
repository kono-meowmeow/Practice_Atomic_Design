import styled from 'styled-components';
import { BaseButton } from './BaseButton';

// PrimaryButtonというコンポーネントを作る
// PrimaryButtonを使うことで、どんな箇所でも同じボタンを使えるようにする
export const PrimaryButton = (props) => {
  // どんな言葉でもPrimaryButtonを作れるようにするために、childrenを使う
  const { children } = props;
  return (
    <SButton>{children}</SButton>
  );
};

// 既存のスタイルを継承するには、styled(BaseButton)という風に書く
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
