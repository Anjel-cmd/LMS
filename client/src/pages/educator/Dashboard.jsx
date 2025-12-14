import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const Dashboard = () => {

  const {currency} = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData)
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])


  return dashboardData ? (
  <div className="min-h-screen p-8 bg-gray-50">
    
    {/* Stats Cards */}
    <div className="flex flex-wrap gap-5 mb-8">
      <div className="flex items-center gap-3 bg-white shadow-card border border-blue-500 p-4 w-56 rounded-md">
        <img src={assets.patients_icon} alt="" />
        <div>
          <p className="text-2xl font-medium text-gray-600">
            {dashboardData.enrolledStudentsData.length}
          </p>
          <p className="text-sm text-gray-500">Total Enrollments</p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white shadow-card border border-blue-500 p-4 w-56 rounded-md">
        <img src={assets.appointments_icon} alt="" />
        <div>
          <p className="text-2xl font-medium text-gray-600">
            {dashboardData.totalCourses}
          </p>
          <p className="text-sm text-gray-500">Total Courses</p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white shadow-card border border-blue-500 p-4 w-56 rounded-md">
        <img src={assets.earning_icon} alt="" />
        <div>
          <p className="text-2xl font-medium text-gray-600">
            {currency}{dashboardData.totalEarnings}
          </p>
          <p className="text-sm text-gray-500">Total Earnings</p>
        </div>
      </div>
    </div>

    {/* Latest Enrollments */}
    <h2 className="text-lg font-medium mb-4">
      Latest Enrolments
    </h2>

    {/* Table */}
    <div className="max-w-5xl bg-white border border-gray-200 rounded-md overflow-hidden">
      <table className="w-full text-left">
        <thead className="border-b bg-gray-50 text-sm text-gray-700">
          <tr>
            <th className="px-6 py-3 text-center hidden sm:table-cell">#</th>
            <th className="px-6 py-3">Student Name</th>
            <th className="px-6 py-3">Course Title</th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-600">
          {dashboardData.enrolledStudentsData.map((item, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="px-6 py-4 text-center hidden sm:table-cell">
                {index + 1}
              </td>

              <td className="px-6 py-4 flex items-center gap-3">
                <img
                  src={item.student.imageUrl}
                  className="w-9 h-9 rounded-full"
                  alt=""
                />
                <span>{item.student.name}</span>
              </td>

              <td className="px-6 py-4">
                {item.courseTitle}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
) : <Loading />;

};

export default Dashboard;
