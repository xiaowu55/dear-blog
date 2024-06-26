"use client";

import { CommunityNavItem, ItemList } from "@/lib/NavList";
import { cn } from "@/lib/utils";
import { t } from "i18next";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";

export const CategoriesNavItem: ItemList = [
  { Name: "test", Link: "", borderColor: "border-b-nav-origin" },
  { Name: "FILM", Link: "", borderColor: "border-b-nav-blue" },
  { Name: "PHOTO", Link: "", borderColor: "border-b-nav-yellow" },
  { Name: "MUSIC", Link: "", borderColor: "border-b-nav-purple" },
  { Name: "DESIGN", Link: "", borderColor: "border-b-nav-green" },
  { Name: "TAG", Link: "", borderColor: "border-b-nav-grey" },
];

export function renderNavItem(itemList: ItemList) {
  return itemList.map((item, index) => (
    <Link key={index} href={item.Link}>
      <span
        className={cn(
          "border-b-2 pb-[1.5px] duration-200 ease-linear hover:border-opacity-0",
          !!item.borderColor ? `${item.borderColor}` : "border-b-buttonText"
        )}
      >
        {t(`${item.Name}`)}
      </span>
    </Link>
  ));
}

export const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [showSearch, inputRef.current]);

  return (
    <div className="relative">
      <div
        className={cn(
          "border-headline mt-[36px] flex max-w-[877px] items-center border-[2.5px] px-10",
          showMenu && "border-b-0"
        )}
      >
        {showSearch ? (
          <>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              ref={inputRef}
              className={cn(
                "mt-0 block h-[112px] w-[676.76px] border-0 text-[112px] focus:ring-0",
                inputValue && inputValue.length > 7 ? "text-[23px]" : "text-[112px]"
              )}
            ></Input>
            <X
              className="ml-[50px] h-[30px] w-[30px] cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                setShowSearch(false);
              }}
            ></X>
          </>
        ) : (
          <>
            <span className="font-sans text-[112px] leading-[112px]">
              <Link href="">VIKTOOOOR</Link>
            </span>
            <Search
              className="ml-[50px] h-[30px] w-[30px] cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                setShowSearch(true);
              }}
            ></Search>
          </>
        )}
        {showMenu ? (
          <X
            className="ml-[20px] h-[30px] w-[30px] cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              setShowMenu(false);
            }}
          ></X>
        ) : (
          <Menu
            className="ml-[20px] h-[30px] w-[30px] cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              setShowMenu(true);
            }}
          ></Menu>
        )}
      </div>
      {showMenu ? (
        <div className="border-headline relative -top-2 max-w-[877px] border-[2.5px] border-t-0 pb-9">
          <div className="grid min-h-4 grid-cols-2 px-10 pt-14 font-serif">
            <div className="flex flex-col gap-5">
              <span>CATEGORIES</span>
              <div className="grid-row-3 col-auto grid grid-cols-2 gap-y-[9px]">{renderNavItem(CategoriesNavItem)}</div>
            </div>
            <div className="flex flex-col gap-5">
              <span>COMMUNITY</span>
              <div className="grid-row-3 col-auto grid grid-cols-2 gap-y-[9px]">{renderNavItem(CommunityNavItem)}</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
