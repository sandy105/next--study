'use client'
import { List,Avatar } from 'antd'
import React from 'react'
import Link from 'next/link'
import {data} from '../data'
export default function BlogList() {
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
        className='!items-center'
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<Link href={`/about/${item.id}`}>{item.title}</Link>}
          // description={item.desc}
        />
      </List.Item>
    )}
  />
  )
}
