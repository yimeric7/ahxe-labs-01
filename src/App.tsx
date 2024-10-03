import { framer, CanvasNode } from "framer-plugin"
import { useState, useEffect } from "react"
import "./App.css"

framer.showUI({
    position: "top right",
    width: 100,
    height: 150,
    resizable: true,
})

function useSelection() {
    const [selection, setSelection] = useState<CanvasNode[]>([])

    useEffect(() => {
        return framer.subscribeToSelection(setSelection)
    }, [])

    return selection
}

export function App() {
    const selection = useSelection()
    const layer = selection.length === 1 ? "layer" : "layers"

    const handleAddSvg = async () => {
        await framer.addSVG({
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#999" d="M20 0v8h-8L4 0ZM4 8h8l8 8h-8v8l-8-8Z"/></svg>`,
            name: "Logo.svg",
        })
    }

    return (
        <main>
            <div className="table-container">
                <div className="table-content">
                    <p>8 x 1 = 8</p>
                    <p>8 x 2 = 16</p>
                    <p>8 x 3 = 24</p>
                    <p>8 x 4 = 32</p>
                    <p>8 x 5 = 40</p>
                    <p>8 x 6 = 48</p>
                    <p>8 x 7 = 56</p>
                    <p>8 x 8 = 64</p>
                    <p>8 x 9 = 72</p>
                    <p>8 x 10 = 80</p>
                    <p>8 x 11 = 88</p>
                    <p>8 x 12 = 96</p>
                    <p>8 x 13 = 104</p>
                    <p>8 x 14 = 112</p>
                    <p>8 x 15 = 120</p>
                    <p>8 x 16 = 128</p>
                    <div className="table-header">AHXE Labs</div>
                </div>
            </div>
        </main>
    )
}