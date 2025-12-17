import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Categories",
    path: "/categories",
    newTab: false,
  },
  {
    id: 2,
    title: "Computers",
    path: "/categories/computers",
    newTab: false,
    submenu: [      
      {
        id: 21,
        title: "Desktops",
        path: "/categories/desktops",
        newTab: false,
      },
      {
        id: 22,
        title: "Notebooks",
        path: "/categories/notebooks",
        newTab: false,
      },
      {
        id: 23,
        title: "Software",
        path: "/categories/software",
        newTab: false,
      }
    ]
  },
  {
    id: 3,
    title: "Electronics",
    path: "/categories/electronics",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Camera & photo",
        path: "/categories/camera-photo",
        newTab: false,
      },
      {
        id: 32,
        title: "Cell phones",
        path: "/categories/cell-phones",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Apparel",
    path: "/categories/apparel",
    newTab: false,
    submenu: [      
      {
        id: 41,
        title: "Shoes",
        path: "/categories/shoes",
        newTab: false,
      },
      {
        id: 42,
        title: "Clothing",
        path: "/categories/clothing",
        newTab: false,
      },
      {
        id: 43,
        title: "Accessories",
        path: "/categories/accessories",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Books",
    path: "/categories/books",
    newTab: false,
  },
];
export default menuData;
