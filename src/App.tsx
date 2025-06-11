import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import EditorPage from "@/pages/EditorPage";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Button>Click me</Button>
            <ModeToggle />
            <EditorPage />
        </ThemeProvider>
    );
}

export default App;
