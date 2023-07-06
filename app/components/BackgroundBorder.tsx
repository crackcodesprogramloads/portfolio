interface ContainerProps {
  children: React.ReactNode;
}

const BackgroundBorder: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="pt-6 pl-6 sm:pt-12 sm:pl-12 w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative -top-2 -left-2 sm:-top-4 sm:-left-4 border-r border-l border-t border-yellow-500">
        <div className="pt-2 pl-2 sm:pt-4 sm:pl-4 w-full h-full absolute -top-2 -left-2 sm:-top-4 sm:-left-4 border-l border-r border-t border-yellow-700">
          <div className="flex flex-col w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBorder;
