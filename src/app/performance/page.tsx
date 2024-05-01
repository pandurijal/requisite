"use client";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getLocalStorage } from "@/utils";

// export const metadata: Metadata = {
//   title: "Performance | Overview",
//   description: "",
//   // other metadata
// };

const Performance = () => {
  const [customerData, setCustomerData] = useState<any>(null);

  useEffect(() => {
    getCustomerData();
  }, []);

  const getCustomerData = () => {
    const customerData = getLocalStorage("req-customer");
    setCustomerData(customerData);
  };

  console.log({ customerData });

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Performance" />

      <div className="rounded-sm border border-stroke bg-white p-1 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5 overflow-hidden">
          <iframe
            width="100%"
            height="1800"
            src={customerData?.["Seats in use"]}
            frameBorder={"0"}
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Performance;
