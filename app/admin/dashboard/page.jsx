import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

export const metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

const AdminDashboardPage = () => {
  return <AdminDashboardClient />;
};

export default AdminDashboardPage;
