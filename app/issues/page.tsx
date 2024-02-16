'use client';
import React, { useEffect, useState } from 'react'
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import IssuesTable from '../components/IssuesTable';

const IssuesPage = () => {  

  return (
    <div className='max-w-xl '>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>

    </div>
  )
}

export default IssuesPage;