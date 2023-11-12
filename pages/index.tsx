import React from 'react';
import Header from '../components/Header';
import JobList from '../components/JobList';

export default function Home() {
  return (
    <div className="font-inter">
      <Header />
      <JobList />
    </div>
  );
}