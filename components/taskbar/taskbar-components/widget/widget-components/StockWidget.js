import { DotsHorizontalIcon } from '@heroicons/react/outline'
import React from 'react'

export default function StockWidget() {
  return (
    <div className="w-[201px] bg-zinc-800/80 h-full rounded p-4">
            <div className="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 mr-2 stroke-green-400"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <p className="opacity-90">Moroccan Stoncks</p>
              {/* <DotsHorizontalIcon className="w-5 mt-0.5 absolute right-0" /> */}
            </div>
            <div className="px-4 pt-4 opacity-90">
              <span className="flex justify-between">
                <p className="">Attijariwafa Bank</p>
                <p className="text-green-500">+2.15%</p>
              </span>
              <span className="flex justify-between">
                <p className="">Maroc Telecom</p>
                <p className="text-green-500">+0.85%</p>
              </span>
            </div>
            <p className="text-sm mt-2.5 text-center text-cyan-500 opacity-80 hover:opacity-100 transition-all ease-in-out">
              <a
                href="https://www.casablanca-bourse.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check stock prices
              </a>
            </p>
          </div>
  )
}