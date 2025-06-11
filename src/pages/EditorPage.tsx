import { useState } from "react";
import CodeEditor from "@/components/playground";

export default function EditorPage() {
    const [code, setCode] = useState("// Start coding");

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Duel Editor</h1>
            <CodeEditor
                language="cpp"
                value={code}
                onChange={(val) => setCode(val || "")}
            />
        </div>
    );
}
