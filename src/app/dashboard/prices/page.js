'use client'

import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// Register Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/getprices')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  // Prepare chart data
  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: data.map((item, index) => ({
      label: item.product,
      data: item.prices || [],
      fill: false,
      borderColor: `hsl(${index * 50}, 70%, 50%)`,
      tension: 0.3
    }))
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="relative overflow-x-scroll shadow-md sm:rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Farm Price Table</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price 1</th>
            <th className="px-6 py-3">Price 2</th>
            <th className="px-6 py-3">Price 3</th>
            <th className="px-6 py-3">Price 4</th>
            <th className="px-6 py-3">Price 5</th>
          </tr>
        </thead>
        <tbody>
          {data.map((price, index) => (
            <tr key={price._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
              <td className="px-6 py-4 break-all">{price.product || <span className="italic text-gray-400">N/A</span>}</td>
              <td className="px-6 py-4 break-all">{(price.category || '').replace('%40', '@')}</td>
              {Array.from({ length: 5 }).map((_, i) => (
                <td key={i} className="px-6 py-4 break-all">
                  {price.prices?.[i] || <span className="italic text-gray-400">N/A</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Price Trends (Last 5 Days)</h3>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}

export default Page
