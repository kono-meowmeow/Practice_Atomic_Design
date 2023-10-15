import styled from 'styled-components';

// PrimaryButtonというコンポーネントを作る
// PrimaryButtonを使うことで、どんな箇所でも同じボタンを使えるようにする
export const PrimaryButton = (props) => {
  // どんな言葉でもPrimaryButtonを作れるようにするために、childrenを使う
  const { children } = props;
  return (
    <SButton>{children}</SButton>
  );
};

const SButton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
