export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Ecosystem & support</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Our comprehensive ecosystem provides all the support you need for your AI journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-2/3">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Completed projects</h3>
              <div className="text-5xl font-bold mb-2">237</div>
              <div className="text-gray-500 dark:text-gray-400">in 2022-2023</div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Customer segmentation</h3>
              <div className="text-gray-500 dark:text-gray-400">for Ecommerce Platform</div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-medium">Progress</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M7 10v12"></path><path d="M15 10v12"></path><path d="M11 10v12"></path><path d="M11 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M7 3.6V2"></path><path d="M15 3.6V2"></path>
                    </svg>
                    <span>29</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M14 9V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4"></path><path d="M20 6L9 17l-2-2"></path>
                    </svg>
                    <span>47</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-700 my-8"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">List of prompts</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">See Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
} 