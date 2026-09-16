import { useState } from "react";
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";
import type { SelectValue, Shoe } from "../types";

interface ShoeDetailProps {
  shoe: Shoe;
  onClickAdd: (shoe: Shoe, qty: SelectValue | null, size: SelectValue | null) => void;
}

interface ShoeForm {
  qty: SelectValue | null;
  size: SelectValue | null;
}

export function ShoeDetail({ shoe, onClickAdd }: ShoeDetailProps) {
  const [form, setForm] = useState<ShoeForm>({ qty: null, size: null });
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse dark:text-white">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full overflow-hidden bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe.src} alt={shoe.title} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        <div className="flex space-x-6">
          <div className=" text-3xl font-extrabold md:text-6xl">
          ${shoe.price}
          </div>
          <Select value={form.qty} onChange={(qty) => setForm({...form, qty})} title={"QTY"} options={QTY} className="" />
          <Select value={form.size} onChange={(size) => setForm({...form, size})} title={"SIZE"} options={SIZES} className=""  />
        </div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button onClick={() => onClickAdd(shoe, form.qty, form.size)} className="cursor-pointer btn-press-anim h-14 w-44 bg-black dark:bg-white dark:text-black text-white hover:bg-gray-900 dark:hover:bg-gray-100 dark:active:bg-gray-300 active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
