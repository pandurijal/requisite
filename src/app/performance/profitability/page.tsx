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
        <div className="flex flex-col gap-7.5">
          <iframe
            width="1200"
            height="1800"
            src="https://lookerstudio.google.com/embed/reporting/29a6e502-218c-449a-b80d-d39c8ca1f1c4/page/p_yqqsaioecd"
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

export default Profitability;
