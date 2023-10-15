import styled from "styled-components";

// Inputをimportすることで、どこでも検索ボックスが使えるようになる
export const Input = (props) => {
  // placeholderというpropsを受け取る
  // placeholderが入力されていないときは、デフォルトで空文字を入れる(placeholder="")
  const { placeholder = "" } = props;
  return (
    <SInput type="text" placeholder={placeholder} />
  );
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
