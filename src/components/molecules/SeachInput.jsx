import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/Input"

// SeachInputというコンポーネントをimportすることで、どこでも検索ボックスが使えるようになる
export const SearchInput = () => {
  return (
    <div>
      <Input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};
