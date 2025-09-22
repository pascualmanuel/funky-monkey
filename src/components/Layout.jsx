import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {title && (
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {title}
            </h1>
          )}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
