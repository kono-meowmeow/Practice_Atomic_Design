import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name, height, width } = props;

  return (
    <SContainer>
      <SImage height={height} width={width} src={image} alt={name} />
      <SName>{name}</SName>
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
