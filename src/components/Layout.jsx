import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title, fullWidth = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
