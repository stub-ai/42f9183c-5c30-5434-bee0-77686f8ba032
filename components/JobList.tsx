import React, { useState } from 'react';

const jobTypes = [
  'All',
  'New Graduate',
  'Short-term Internship',
  'Long-term Internship',
  'Event & Information Session',
];

// Mock job data
const jobs = [
  {
    id: 1,
    photo: 'https://via.placeholder.com/150',
    jobType: 'Long-term Internship',
    jobTitle: 'Software Engineer',
    companyLogo: 'https://via.placeholder.com/50',
    companyName: 'Google',
  },
  // Add more jobs here...
];

export default function JobList() {
  const [selectedJobType, setSelectedJobType] = useState('All');

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4">
        <h2 className="font-inter font-bold text-lg mb-4">Job Types</h2>
        <div className="md:hidden">
          <select
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {jobTypes.map((jobType) => (
              <option key={jobType} value={jobType}>
                {jobType}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:block">
          {jobTypes.map((jobType) => (
            <div key={jobType} className="mb-2">
              <label className="font-inter font-normal text-sm">
                <input
                  type="radio"
                  name="jobType"
                  value={jobType}
                  checked={selectedJobType === jobType}
                  onChange={() => setSelectedJobType(jobType)}
                  className="mr-2"
                />
                {jobType}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded-lg">
              <img src={job.photo} alt="Job" className="w-full h-32 object-cover mb-4 rounded" />
              <h3 className="font-inter font-bold text-lg mb-2">{job.jobType}</h3>
              <h2 className="font-inter font-bold text-2xl uppercase mb-2">{job.jobTitle}</h2>
              <div className="flex items-center mb-2">
                <img src={job.companyLogo} alt="Company Logo" className="w-8 h-8 mr-2" />
                <h4 className="font-inter font-bold text-lg">{job.companyName}</h4>
              </div>
              <button className="font-inter font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}