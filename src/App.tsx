import { useContext, useEffect } from "react";
import { Header, Loader, Sidebar } from "./components";
import { EmailContext } from "./hooks/EmailContext";
import { Home } from "./pages";

const App = () => {
    const { myStates: {isLoading}, setMyStates } = useContext(EmailContext);

    useEffect(() => {
        setMyStates(pre => ({ ...pre, isLoading: true}));
        setTimeout(() => {
            setMyStates(pre => ({ ...pre, isLoading: false}));
        }, 2000);
    }, []);

  return (
    <div className="font-sans bg-gray-100 h-[100vh]">
      <Header />
      <div className="container mx-auto my-4 flex flex-col lg:flex-row h-[calc(100%-120px)]">
        {isLoading && <Loader />}
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
