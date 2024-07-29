import { AlignRight, Bookmark, Check, Clock4Icon, Tally3, X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

const labelClasses = [
    {
        colour: "indigo",
        class: "bg-indigo-300",
        hover: "hover:border-indigo-500 hover:border-2",
        selected: "bg-indigo-500"
    },
    {
        colour: "gray",
        class: "bg-gray-300",
        hover: "hover:border-gray-500 hover:border-2",
        selected: "bg-gray-500"
    },
    {
        colour: "green",
        class: "bg-green-300",
        hover: "hover:border-green-500 hover:border-2",
        selected: "bg-green-500"
    },
    {
        colour: "yellow",
        class: "bg-blue-300",
        hover: "hover:border-blue-500 hover:border-2",
        selected: "bg-blue-500"
    },
    {
        colour: "red",
        class: "bg-red-300",
        hover: "hover:border-red-500 hover:border-2",
        selected: "bg-red-500"

    },
    {
        colour: "purple",
        class: "bg-purple-300",
        hover: "hover:border-purple-500 hover:border-2",
        selected: "bg-purple-500"
    }
]

export default function EventModal() {

    const { setShowEventModal, daySelected, dispatchCalEvent } = useContext(GlobalContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedLabel, setSelectedLabel] = useState('')

    const switchClases = (color) => {
        return selectedLabel === color.colour ? color.selected : `${color.class} ${color.hover}`
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const calendarEvent = {
            title, 
            description,
            label: selectedLabel,
            date: daySelected.valueOf(),
            id: Date.now()
        }
        dispatchCalEvent({
            type: 'push',
            payload: calendarEvent
        })
        setShowEventModal(false)
        console.log("Event added", calendarEvent)
    }

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
                            className="col-span-4 pt-3 border-0 text-xl font-semibold text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />

                        <Clock4Icon className='text-gray-500 col-span-1' />
                        <p className='col-span-4 capitalize'>{daySelected.format("dddd, MMMM, DD")}</p>
                        <AlignRight className='col-span-1 text-gray-500' />
                        <input
                            type="text"
                            name='description'
                            placeholder='Add a description'
                            className="col-span-4 pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                        <Bookmark className='text-gray-500 col-span-1' />
                        <div className='col-span-4 flex gap-x-2 '>
                            {labelClasses.map((color, index) => (
                                <span key={index}
                                    onClick={() => setSelectedLabel(color.colour)}
                                    className={`${switchClases(color)} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all ease-in-out duration-150`}>
                                    {selectedLabel === color.colour && <Check className='text-white w-2/3' />}
                                </span>

                            ))}
                            
                        </div>

                    </div>
                </div>
                <footer className='flex justify-end w-100 border-t p-3 mt-5'>
                    <button 
                        onClick={handleSubmit}
                        className='bg-blue-500 hover:bg-blue-600 px-6 py-1.5 rounded text-white'>
                        Save
                    </button>
                </footer>
            </form>
        </div>
    )
}
