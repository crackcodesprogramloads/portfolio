"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const BackgroundBorder: React.FC<ContainerProps> = ({ children }) => {
  return (
    /* DONT TOUCH OUTSIDE DIV */
    <div className="pt-12 pl-12 w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative -top-4 -left-4 border-r border-l border-t border-yellow-500">
        <div className="pt-4 pl-4 w-full h-full absolute -top-4 -left-4 border-l border-r border-t border-yellow-700">
          <div className="flex flex-col w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBorder;

{
  /* <div className="px-4 py-8 w-full h-full flex items-center justify-center">
      <div className="z-1 w-full h-full relative border-r border-l border-b border-t border-yellow-500">
        <div className="z-2 w-full h-full absolute border-l border-r border-b border-t border-yellow-700">
          <div className="z-3 w-full h-full absolute border-l border-r border-b border-t border-yellow-600">
            <div className="border border-purple-500 w-40 h-40">{children}</div>
          </div>
        </div>
      </div>
    </div> */
}
