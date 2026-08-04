import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/redux-slice/userSlice";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import PlayMovie from "./PlayMovie";

function App() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    { path: "/play/:movieId", element: <PlayMovie /> },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          }),
        );
        appRouter.navigate("/browse");
      } else {
        dispatch(removeUser());
        appRouter.navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <section>
      <RouterProvider router={appRouter} />
    </section>
  );
}

export default App;
