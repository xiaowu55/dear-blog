"use client";

import { CategoriesNavItem, NavBar, NavItem } from "@/components/NavBar";
import { t } from "i18next";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex w-full max-w-full flex-col items-center px-5 pt-8">
      <div className="flex w-full max-w-[1140px] font-sans text-[9px] font-[500] text-headline">
        <span>
          <Link href="">BECOME A MEMBER</Link>
        </span>
        <div className="ml-auto flex gap-3">
          <span className="border-b border-b-headline duration-200 ease-linear hover:border-opacity-0">
            {t("SwitchLanguage")}
          </span>
          <span className="border-b border-b-headline duration-200 ease-linear hover:border-opacity-0">
            <Link href="">LOG IN</Link>
          </span>
          <span className="border-b border-b-headline duration-200 ease-linear hover:border-opacity-0">
            <Link href="">SUBMIT</Link>
          </span>
        </div>
      </div>
      <div className="mx-5 flex w-full max-w-[1140px]">
        <NavBar></NavBar>
        <div className="grid-row-3 col-auto ml-10 mt-9 grid max-h-[112px] grid-cols-2 gap-x-5">
          {NavItem(CategoriesNavItem)}
        </div>
      </div>
    </main>
  );
}
