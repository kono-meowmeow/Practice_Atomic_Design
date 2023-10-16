import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img height={160} width={240} src="https://source.unsplash.com/gKXKBY-C-Dk" alt="プロフィール" />
      <p>名前</p>
      <SDL>
        <dt>メール</dt>
        <dd>1111@aaa.com</dd>
        <dt>TEL</dt>
        <dd>000-0000-000</dd>
        <dt>会社名</dt>
        <dd>ああああ会社</dd>
        <dt>WEB</dt>
        <dd>https://google.com</dd>
      </SDL>
    </div>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left; // float: left;を指定することで、dtタグを左側に寄せることができる
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word; // 画面幅を超えたときに、単語単位で改行する
  }
`;
