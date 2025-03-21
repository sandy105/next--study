import React from 'react'
import {data} from '../../../data'
import {Card} from 'antd'
export async function generateMetadata({ params }) {
    // read route params
    const { id } = await params
    return {
      title: `${id}-博客详情`,
  }
}
   
export default async function Page({params}) {
const { id } = await params
const currentItem = data.find(i => i.id ===  +id)
  return (
    <>
    <Card title = {currentItem?.title}>
    <p>{currentItem?.desc}</p>
    </Card>
    </>
  )
}
