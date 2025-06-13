import React from 'react'
import Button from '../../components/ui/Button'

function Events() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <Button
        label='Create +'
        type='button'
        onClick={() => alert('Button Clicked!')}
        variant='primary'
        />
    </div>
  )
}

export default Events
