import { Table } from '@radix-ui/themes'
import React from 'react'

const IssuesTable = ({issues}: any) => {
    return (
        <div className='mt-5'>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>CreatedAt</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {issues.map((issue: any) => (
                        <Table.Row key={issue.id}>
                            <Table.RowHeaderCell>{issue.id}</Table.RowHeaderCell>
                            <Table.Cell>{issue.title}</Table.Cell>
                            <Table.Cell>{issue.description}</Table.Cell>
                            <Table.Cell>{issue.createdAt}</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table.Root>

        </div>
    )
}

export default IssuesTable