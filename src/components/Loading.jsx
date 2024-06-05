import { mirage } from "ldrs";

function Loading() {
  mirage.register();
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <l-mirage size="150" speed="2.5" color="white"></l-mirage>
    </div>
  );
}

export default Loading;
