import { Suspense } from "react";
import { Loading } from "./components";
import { AppRouting } from "./routes/index.routes";
import CategoryMenuBody from "./components/category-menu-body/CategoryMenuBody.component";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <CategoryMenuBody />
      <AppRouting />
    </Suspense>
  );
}

export default App;
