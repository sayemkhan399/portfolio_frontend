import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";
import Work from "../components/Work";
import Contact from "../components/Contact";
import BlogPage from "../components/Blog/BlogPage";
import BlogPost from "../components/Blog/BlogPost";
import AllProjects from "../components/AllProjects";
const   router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        { index: true, element: <Home/> },
        { path: "my-work", 
          element: <Work/>,
          
         },
         { path: "all-projects", element: <AllProjects /> },
        {
          path: "blog",
          children:[
            { index: true , element: <BlogPage/>},
            {
              path: "/blog/:id",
              element: <BlogPost/>
            }
          ]
        },
        { path: "contact", element: <Contact/> },
    ]
  },
]);

export default router;
