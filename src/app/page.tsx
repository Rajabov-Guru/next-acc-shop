import ProductsTableWidget from "@/widgets/ProductsTable/ProductsTable";

export default function Home() {
  return (
      <main className="w-full py-[30px] px-[10px] sm:px-[20px] flex flex-col gap-6">
        <div className="w-full text-center font-bold text-xl">
          <p>Мы являемся производителем аккаунтов</p>
          <p>По этому качество аккаунтов на высшем уровне!</p>
        </div>
        <div className="flex flex-col">
          <p className="text-center font-bold text-2xl">Все товары</p>
          <ProductsTableWidget/>
        </div>
      </main>
  );
}
