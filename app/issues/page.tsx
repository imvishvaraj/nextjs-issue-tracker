'use client';
import React, { useEffect, useState } from 'react'
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import IssuesTable from '../components/IssuesTable';

const IssuesPage = () => {
  const [issues, setIssues] = useState([]);
  // console.log('issues', issues)

    useEffect(() => {
      fetch('/api/issues')
        .then(response => response.json())
        .then(data => setIssues(data))
        .catch(error => console.error(error));
    }, []);
  

  return (
    <div className='max-w-xl '>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <IssuesTable issues={issues} />

    </div>
  )
}

export default IssuesPage;