"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScriptBlockProps {
  title: string
  description?: string
  items: {
    name: string
    code: string
    id?: string
  }[]
}

export default function ScriptBlock({ title, description, items }: ScriptBlockProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 className="flex items-center text-3xl font-extrabold mb-2">
        <span className="inline-block align-middle mr-2">💻</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 drop-shadow">{title}</span>
      </h2>
      {description && <p className="text-base mb-6 text-gray-500 dark:text-gray-400">{description}</p>}
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} id={item.id || `script-${index}`} className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-700/80">
              <h3 className="font-semibold text-base text-blue-700 dark:text-blue-300">{item.name}</h3>
              <Button 
                variant="default"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-base gap-2"
                onClick={() => handleCopy(item.code, index)}
              >
                {copiedIndex === index ? (
                  <>
                    <CheckIcon className="h-3.5 w-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
            <div className="p-4 overflow-x-auto bg-gray-50 dark:bg-gray-900 rounded-b-xl">
              <pre className="text-sm font-mono whitespace-pre-wrap break-all">
                <code className="text-green-700 dark:text-green-300">{item.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 