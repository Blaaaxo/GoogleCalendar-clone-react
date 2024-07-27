import { Plus } from 'lucide-react'
import React, { useContext } from 'react'
import GlobalContext from '../../../context/GlobalContext'

export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} 
            className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl transition-all ease-in duration-150'>
            <Plus className='w-7 h-7' />
            <span className='pl-3 pr-7'>Create</span>
        </button>
    )
}
