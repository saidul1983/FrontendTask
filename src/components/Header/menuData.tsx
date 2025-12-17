import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "Computers",
    path: "/about",
    newTab: false,
    submenu: [      
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      }
    ]
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
    submenu: [
      {
        id: 101,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 102,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [      
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 114,
    title: "Electronics",
    newTab: false,
    submenu: [      
      {
        id: 44,
        title: "First",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Second",
        path: "/blog-details",
        newTab: false,
      }
    ]
  },
];
export default menuData;
