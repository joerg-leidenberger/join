import Header from './Header';
import Main from './Main';

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <div className='layout'>
      <Header />
      <Main>{children}</Main>
      <div id='portal-root'></div>
    </div>
  );
}
export default layout;
