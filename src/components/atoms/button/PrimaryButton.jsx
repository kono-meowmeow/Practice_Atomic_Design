export const PrimaryButton = (props) => {
  // どんな言葉でもPrimatyButtonを作れるようにするために、childrenを使う
  const { children } = props;
  return (
    <button>{children}</button>
  );
};
