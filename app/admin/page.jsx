import AdminLoginForm from "@/components/admin/AdminLoginForm";

const AdminLoginPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* <div className="mb-10 rounded-[2.5rem] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
          <h1 className="text-5xl font-semibold text-white">Admin access</h1>
          <p className="mt-3 text-slate-400">Use your admin credentials to manage published blog posts and offer campaigns.</p>
        </div> */}
        <AdminLoginForm />
      </div>
    </main>
  );
};

export default AdminLoginPage;
