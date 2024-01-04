import React from 'react'

const ExtraSpace = () => {
  return (
    <div>
    node --max-old-space-size=2048 index.js
         node -e 'console.log(v8.getHeapStatistics().total_available_size / (1024 * 1024))'
    node --expose-gc --max-old-space-size=4096 -e 'console.log(v8.getHeapStatistics().total_available_size / (1024 * 1024))'

    node --expose-gc --max-old-space-size=4096 --heap-prof -e 'console.log(v8.getHeapStatistics().heap_size_limit / (1024 * 1024))'

    node --expose-gc --max-old-space-size=4096 -e 'console.log(v8.getHeapStatistics().total_available_size / (1024 * 1024))'


    node --expose-gc --max-old-space-size=2048 -e 'console.log("Heap size limit:", v8.getHeapStatistics().heap_size_limit / (1024 * 1024))'

    </div>
  )
}

export default ExtraSpace