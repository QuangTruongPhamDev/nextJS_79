import SearchShoe from "@/app/components/SearchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";
import { IShoeType } from "@/app/types/shoe";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SearchPage = async ({ searchParams }) => {
  const { tenGiay } = searchParams;
  console.log("tenGiay: ", tenGiay);

  const listInitShoe = await getListProductByKeyWord(tenGiay);
  console.log("listInitShoe: ", listInitShoe);

  return (
    <div>
      <SearchShoe initDataListShoe={listInitShoe} />
    </div>
  );
};

export default SearchPage;
