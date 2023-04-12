import { MainLayout } from "@/components/layout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function HomePage({}: Props) {
  return <MainLayout></MainLayout>;
}

export default HomePage;
