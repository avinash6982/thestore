import Navbar from "./components/Navbar";
import AppBackground from "./components/Background/AppBackground";
import AppNavigator from "./AppNavigator";
import CategoriesList from "./components/CategoriesList";
import { useQuery } from "react-query";

import { getRequest } from "./api/requests";
import { API } from "./api/endpoints";

export default function App() {
  useQuery("categories", () => getRequest(API.CATEGORIES));
  return (
    <div className="isolate bg-white min-h-screen flex flex-col">
      <AppBackground />
      <Navbar />
      <div className="flex-1 flex flex-col sm:flex-row">
        <main className="flex-1 bg-indigo-100 bg-opacity-20">
          <AppNavigator />
        </main>

        <nav className="order-first sm:w-52 p-3 flex">
          <CategoriesList />
        </nav>

        <aside className="sm:w-64">Right Sidebar</aside>
      </div>
    </div>
  );
}
