import { Clock4Icon, Tally3, X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function EventModal() {
    const { setShowEventModal, daySelected } = useContext(GlobalContext)
    const [title, setTitle] = useState('')
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
                    <div className="grid grid-cols-5 items-end gap-y-7">
                        <div className='col-span-1'></div>
                        <input
                            type="text"
                            name='title'
                            placeholder='Add title'
                            className="col-span-4 pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />

                        <Clock4Icon className='text-gray-500 col-span-1' />
                        <p className='col-span-4 capitalize'>{daySelected.format("dddd, MMMM, DD")}</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
