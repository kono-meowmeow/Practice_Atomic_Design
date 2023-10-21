import { createContext } from "react";
import { useState } from "react";

// 初期化では値は必要ないから空のオブジェクトを渡す
export const UserContext = createContext({});

export const UserProvider = (props) => {
  // Providerのコンポーネントは、何でも囲めるようにPropsとしてchildrenを受け取るようにする
  const { children } = props;
  // 実際には、固定値ではなく、useStateなどでstateを管理することが多い
  const contextName = "紫宮るな";
  // useStateを使って、userInfoを管理する。(初期値はnull)
  // グローバルなstateが更新されると、グローバルなstateを参照しているコンポーネントが再レンダリングされることに注意
  const [userInfo, setUserInfo] = useState(null);

  return (
    // グローバルに参照できる値をvalueとして渡す
    // Providerで囲ったコンポーネントは、valueの値を参照できる
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

// 1. providersフォルダーを作成する
// 2. providersフォルダーの中にUserProvider.jsx(userに関する情報を扱うprovider)を作成する
// 3. createContextを用いて、グローバルに参照できる値(UserContext)を作成する
// 4. UserProvider.jsxの中で、UserContext.Providerを用いて、グローバルに参照できる値をvalueとして渡す
// 5. UserProvider.jsxの中で、childrenを返却するようにする
// 6. UserProviderで囲って、グローバルに参照できる値を参照できるようにする
// 7. useContextを用いて、グローバルに参照できる値を参照できるようにする
