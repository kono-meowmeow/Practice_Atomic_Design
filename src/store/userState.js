import { atom } from 'recoil';

export const userState = atom({
  // keyはなんでもいいが、変数名と同じにしておくとわかりやすい
  key: "userState",
  // 初期値を設定する
  default: { isAdmin: false }
});
