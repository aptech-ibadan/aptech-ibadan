import ChatBox from "@/components/Chatbox";

 
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Aptech Ibadan Learning Portal</h1>
        <p className="text-gray-600 mb-8">
          Welcome to our official gallery and student portal. Explore our world-class facilities and career-shaping courses.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm">View Gallery</div>
          <div className="bg-white p-6 rounded-xl shadow-sm">Our Courses</div>
        </div>
      </div>

      {/* The Chatbot Component */}
      <ChatBox />
    </main>
  );
}