import Menu from "../components/Menu";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Menu />
      <div>{children}</div>
    </>
  );
}
