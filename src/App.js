import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { queryClient } from "./query/queryClient";
import { store } from "./redux/store";
import { Home } from "./UI/screens/home/home";
import { SearchScreen } from "./UI/screens/searchScreen/searchScreen";
import { CategoryScreen } from "./UI/screens/categoriesScreen/categoryScreen";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/home/:pageNumber" element={<Home />} />
            <Route path="/search/:pageNumber" element={<SearchScreen />} />
            <Route path="/category/:pageNumber" element={<CategoryScreen />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
