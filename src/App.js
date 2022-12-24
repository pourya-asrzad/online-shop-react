import { Suspense } from "react";
import { Loading } from "./components";
import { AppRouting } from "./routes/index.routes";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AppRouting />
    </Suspense>
  );
}

export default App;
