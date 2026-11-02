import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenu(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#243C63] bg-[#0F172A] text-white">

      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4">

        <Link to="/" className="text-2xl font-black">
          AUTO<span className="text-cyan-400">CARE</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/#how">كيف يعمل</Link>
          <Link to="/#services">الخدمات</Link>
          <Link to="/#centers-sec">المراكز</Link>
          <Link to="/garage">التطبيق والعداد</Link>
          <Link to="/#join" className="text-cyan-400">
            انضم كمركز صيانة
          </Link>
        </nav>

        <Button
          onPress={() => navigate("/garage")}
          className="hidden bg-blue-600 text-white lg:flex"
        >
          فتح الكراج
        </Button>

        <button
          onClick={() => setMenu(!menu)}
          className="text-2xl text-cyan-400 lg:hidden"
        >
          ☰
        </button>

      </div>

      {menu && (
        <div className="flex flex-col gap-5 bg-[#142037] p-5 lg:hidden">

          <Link to="/#how" onClick={closeMenu}>كيف يعمل</Link>
          <Link to="/#services" onClick={closeMenu}>الخدمات</Link>
          <Link to="/#centers-sec" onClick={closeMenu}>المراكز</Link>
          <Link to="/garage" onClick={closeMenu}>التطبيق والعداد</Link>

          <Button
            onPress={() => {
              closeMenu();
              navigate("/garage");
            }}
            className="bg-blue-600 text-white"
          >
            فتح الكراج
          </Button>

        </div>
      )}

    </header>
  );
}