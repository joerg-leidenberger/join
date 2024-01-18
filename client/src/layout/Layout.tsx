import Header from './Header';
import Main from './Main';

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
export default layout;
