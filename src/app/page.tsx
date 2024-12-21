import AttendenceTable from "@/components/dashboard/attendence-table";
import { Suspense } from "react";

export default function Home() {
  return (
<div className="flex-1  p-2">
  <Suspense fallback="Loading">
  <AttendenceTable/>
  </Suspense>
</div>
  );
}


