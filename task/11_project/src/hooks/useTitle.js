import { useEffect, useState } from "react";

export const useTitle = (pageTitle) => {
  const [title, setTitle] = useState(pageTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return [title, setTitle];
};
