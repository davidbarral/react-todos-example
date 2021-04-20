import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = title;

    return () => {
      document.title = oldTitle;
    };
  }, [title]);
};

export default usePageTitle;
