import styled from 'styled-components';

export const Card = (props) => {
  const { children } = props;
  return (
    <SCard>
      {children}
    </SCard>
  );
};

// 下記のスタイルだと、横幅がいっぱいまで広がるが、汎用性を高めるためにこのままにする
// 横幅は、使う箇所で指定する
const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px; // 影をつけて立体感を出す
  border-radius: 8px;
  padding: 16px;
`;

