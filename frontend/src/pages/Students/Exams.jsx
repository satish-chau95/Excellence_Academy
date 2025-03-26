import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from '../../styles/ExamStyles'; 

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExamSection = () => {
  // Sample exam results data
  const examResultsData = {
    subjects: ['Math', 'Science', 'English', 'History'],
    results: [80, 75, 90, 85]
  };

  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: 'Exam Results',
        data: examResultsData.results,
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
        ],
        borderWidth: 1,
      },
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
        text: 'Exam Performance by Subject',
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Exam Results</h2>
              
              {/* Results Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {examResultsData.subjects.map((subject, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{subject}</h3>
                    <div className="mt-2 flex items-end justify-between">
                      <span className="text-3xl font-bold text-blue-600">
                        {examResultsData.results[index]}%
                      </span>
                      <div className={`h-1 w-16 rounded-full bg-blue-600 
                        opacity-${Math.floor(examResultsData.results[index] / 10) * 10}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="h-[400px] mt-8">
                <Bar data={barChartData} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
