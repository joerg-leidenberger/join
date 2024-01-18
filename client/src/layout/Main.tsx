import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode;
};

function Main({ children }: Props) {
  return (
    <main className="main">
      <Sidebar />
      {children}
    </main>
  );
}
export default Main;
