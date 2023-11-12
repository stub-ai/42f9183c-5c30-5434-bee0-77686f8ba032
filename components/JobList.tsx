import React, { useState } from 'react';

const jobTypes = [
  'All',
  'New Graduate',
  'Short-term Internship',
  'Long-term Internship',
  'Event & Information Session',
];

export default function JobList() {
  const [selectedJobType, setSelectedJobType] = useState('All');

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4">
        <h2 className="font-inter font-bold text-lg mb-4">Job Types</h2>
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
      <div className="w-full md:w-3/4 p-4">
        {/* Job listings go here */}
      </div>
    </div>
  );
}