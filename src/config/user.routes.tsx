import { BookmarkCheck, BookOpen } from "lucide-react";

export const userRoutes = [
  {
    title: "Libros",
    to: "/dashboard/books",
    icon: <BookOpen />,
  },
  {
    title: "Mis transacciones",
    to: "/dashboard/loans",
    icon: <BookmarkCheck />,
  },

];
