import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Performance | Profitability",
  description: "",
  // other metadata
};

const Profitability = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profitability" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5"></div>
      </div>
    </DefaultLayout>
  );
};

export default Profitability;
