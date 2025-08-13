import Navbar from "@/components/ui/Navbar";
import { ClientOnly } from "@/utils/isClient";

function LayoutApp({ children }: any) {
  return (
    <div className="bg-base">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="bg-primary">
        {children}
      </main>
    </div>
  );
}

export default LayoutApp;