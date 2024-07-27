import { Tally3, X } from 'lucide-react'
import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function EventModal() {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center backdrop-brightness-50'>
            <form className='bg-white rounded-lg shadow-xl w-1/4'>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>

                    <div className='flex justify-center items-center'>
                        <Tally3 className='rotate-90 text-gray-500' />
                    </div>
                    <button onClick={() => setShowEventModal(false)}>
                        <X className='cursor-pointer text-gray-400' />
                    </button>
                </header>
                <div className='p-3'>
                    
                </div>
            </form>
        </div>
    )
}
