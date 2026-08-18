import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Shared shell for all public/user-facing pages so Navbar/Footer render
// consistently instead of every page importing (or forgetting to import)
// them individually.
function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen page-wash">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
