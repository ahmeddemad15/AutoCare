
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-[#0F172A] px-5 text-white"
    >
      <div className="max-w-lg text-center">

        <h1 className="mb-4 text-8xl font-black text-blue-500">
          404
        </h1>

        <h2 className="mb-4 text-3xl font-bold">
          الصفحة غير موجودة!
        </h2>

        <p className="mb-8 text-gray-400">
          عذراً، الصفحة التي تبحث عنها غير موجودة.
        </p>

        <Button
          as={Link}
          to="/"
          className="rounded-xl bg-blue-600 px-8 font-bold text-white"
        >
          العودة للصفحة الرئيسية ←
        </Button>

      </div>
    </div>
  );
}
