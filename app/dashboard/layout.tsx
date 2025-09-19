import UserLayout from "@/components/UserLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | FollowerGratis.it",
};


const layout = ({ children }: { children: React.ReactNode }) => {
  return <UserLayout>{children}</UserLayout>;
};

export default layout;
