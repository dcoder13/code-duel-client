import React from "react";
import Editor from "@monaco-editor/react";

type Props = {
    language: string;
    value: string;
    onChange: (value: string | undefined) => void;
};

const CodeEditor: React.FC<Props> = ({ language, value, onChange }) => {
    return (
        <div className="h-[500px] border rounded-xl overflow-hidden">
            <Editor
                height="100%"
                defaultLanguage={language}
                value={value}
                onChange={onChange}
                theme="vs-dark"
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    automaticLayout: true,
                    tabSize: 2,
                    formatOnType: true,
                    formatOnPaste: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;
