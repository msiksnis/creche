import Header from "./Header/Header";

export default function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
