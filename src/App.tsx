import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { Toast } from "./components/Toast";
import { BiMoon, BiSun } from "react-icons/bi";
import type { CartEntry, SelectValue, Shoe } from "./types";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState<Shoe>(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null);

  const showToast = (message: string) => {
    setToast({ id: Date.now(), message });
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      String(window.document.documentElement.classList.contains("dark"))
    );
  };


  const removeFromCart = (productId: number) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    if (existingItemIndex === -1) return;
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (
    product: Shoe,
    qty: SelectValue | null,
    size: SelectValue | null
  ) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex !== -1) {
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          qty,
          size,
        };
      } else {
        updatedCartItems.push({ product, qty, size });
      }
      setCartItems(updatedCartItems);
      showToast(`Successfully added ${product.title} to cart`);
    }
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart}/>
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFromCart}/>
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="cursor-pointer bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
      {toast && (
        <Toast key={toast.id} message={toast.message} onDone={() => setToast(null)} />
      )}
    </div>
  );
}
