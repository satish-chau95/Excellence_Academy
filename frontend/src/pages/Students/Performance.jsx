// PerformanceSection.js
import React from 'react';
import Sidebar from './Sidebar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from '../../styles/PerformanceStyles'; // Import styled components from PerformanceSectionStyles.js

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceSection = () => {
  // Sample performance data
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 85, 90, 88, 92, 85],
    subjects: ['Math', 'Science', 'English', 'History'],
    subjectWiseProgress: {
      Math: [75, 82, 88, 85, 90, 87],
      Science: [70, 75, 85, 82, 88, 85],
      English: [85, 88, 92, 90, 95, 93],
      History: [78, 80, 85, 83, 88, 86],
    }
  };

  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Overall Performance',
        data: performanceData.marks,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.3,
      },
      ...performanceData.subjects.map((subject, index) => ({
        label: subject,
        data: performanceData.subjectWiseProgress[subject],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(153, 102, 255)',
        ][index],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ][index],
        tension: 0.3,
      })),
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Performance Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-[250px]"> {/* Adjust ml-[250px] based on your sidebar width */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Performance Analysis</h2>

              {/* Performance Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {performanceData.subjects.map((subject, index) => {
                  const latestScore = performanceData.subjectWiseProgress[subject].slice(-1)[0];
                  const previousScore = performanceData.subjectWiseProgress[subject].slice(-2)[0];
                  const improvement = latestScore - previousScore;

                  return (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                    >
                      <h3 className="text-sm font-semibold text-gray-600">{subject}</h3>
                      <div className="mt-2 flex items-end justify-between">
                        <span className="text-2xl font-bold text-gray-800">{latestScore}%</span>
                        <span className={`text-sm ${improvement >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {improvement > 0 ? '+' : ''}{improvement}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Performance Chart */}
              <div className="h-[400px] mt-8">
                <Line data={lineChartData} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
