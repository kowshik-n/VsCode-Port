<div className="flex">
  <div className="h-full w-11 bg-neutral-800  flex-col py-4 z-50 border-r border-[#3c3c3c] mt-7 hidden lg:flex">
    <div className="space-y-4">
      <div
        className={`h-10 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center border-l-2 ${
          isSidebarVisible ? "border-white text-white" : "border-transparent"
        }`}
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        <img src={fileExplorer} alt="File Explorer" className="w-5 h-5" />
      </div>
      <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
        <img src={extensions} alt="Extensions" className="w-5 h-5" />
      </div>
      <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
        <img src={git} alt="Git" className="w-5 h-5" />
      </div>
    </div>
  </div>
  {isSidebarVisible && (
    <div className="h-full w-60 bg-black/90 text-white border-r border-[#3c3c3c] z-40 hidden lg:block mt-7">
      <div className="p-4 text-sm text-[#bbbbbb] font-semibold uppercase tracking-wide">
        Explorer
      </div>
      <div className="text-[#cccccc]">
        <div
          className="px-4 py-2 hover:bg-[#37373d] cursor-pointer flex items-center"
          onClick={() => setIsExplorerOpen(!isExplorerOpen)}
        >
          <i
            className={`codicon codicon-chevron-${
              isExplorerOpen ? "down" : "right"
            } mr-2 text-xs`}
          ></i>
          <i
            className={`codicon codicon-folder${
              isExplorerOpen ? "-opened" : ""
            } text-[#dcb67a] mr-2`}
          ></i>
          src
        </div>
        {isExplorerOpen && <Navbar />}
      </div>
    </div>
  )}
</div>;
