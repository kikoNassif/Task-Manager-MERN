"use client";

import { useUserContext } from "@/context/userContext";
import React from "react";

interface MainContentLayout {
  children: React.ReactNode;
}

function MainContentLayout({ children }: MainContentLayout) {
  const userId = useUserContext().user._id;
  return (
    <main className={`${ userId ? `pr-[20rem]` : `` } pb-[1.5rem] flex h-full`}>MainContentLayout</main>
  )
}

export default MainContentLayout