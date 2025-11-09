export function InviteSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">
              Invite your friends
            </h2>
          </div>
          <div className="relative">
            <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-6 w-64 h-64 flex items-center justify-center relative">
              <div className="absolute" style={{ top: "20%", left: "15%" }}>
                <div className="rounded-full overflow-hidden h-12 w-12 border-2 border-white bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600">👤</span>
                </div>
              </div>
              <div className="absolute" style={{ top: "30%", right: "10%" }}>
                <div className="rounded-full overflow-hidden h-16 w-16 border-2 border-white bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">👤</span>
                </div>
              </div>
              <div className="absolute" style={{ bottom: "25%", left: "25%" }}>
                <div className="rounded-full overflow-hidden h-14 w-14 border-2 border-white bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600">👤</span>
                </div>
              </div>
              <div className="absolute" style={{ bottom: "25%", right: "25%" }}>
                <div className="rounded-full overflow-hidden h-10 w-10 border-2 border-white bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-600">👤</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 