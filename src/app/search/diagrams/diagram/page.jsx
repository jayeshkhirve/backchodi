import ApiHelper from '@/helpers/ApiHelper'
import CanvasComponent from '@/widgets/diagram/CanvasComponent'
import DiagramBottomSheet from '@/widgets/diagram/components/DiagramBottomSheet'
import ZoomPanel from '@/widgets/diagram/ZoomPanel'
import DiagramAppBar from '@/widgets/primary/appBar/DiagramAppBar'
import React from 'react'


export default async function DiagramPage() {
  let data = await ApiHelper.get('/load-wiring-diagram?id=' + 2,)
  return (
    <div>
      <DiagramAppBar />
      <CanvasComponent data={data} />
      <ZoomPanel />
      <DiagramBottomSheet />
    </div>
  )
}
