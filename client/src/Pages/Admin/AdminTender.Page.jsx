import React from "react";

import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import AdminTenders from "../../Components/Admin/Tender/index";

const AdminTenderPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full my-10 gap-5">
          <AdminTenders />
        </div>
      </div>
    </>
  );
};

export default AdminTenderPage;
