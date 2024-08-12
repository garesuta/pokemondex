import React from 'react'
import { generationList, typesList, sortList } from '../../utils/optionList'
import { useSearchForm } from './SearchForm.hook'

const SearchForm = () => {
    const { fieldKeyword, fieldSort, fieldGeneration, fieldType } = useSearchForm();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-[20px] mt-[40px]'>
            <div>
                <form className="max-w-sm mx-auto">
                    <label htmlFor="generation" className="capitalize block mb-2 text-mb font-medium text-white dark:text-white">generation</label>
                    <select {...fieldGeneration} id="generation" className="capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[[#375EAA]] block w-full p-2.5">
                        {generationList.map((item, index) => {
                            return <option className='capitalize' key={`generation-key-${index}`} value={index}>{item.name}</option>
                        })};
                    </select>
                </form>
            </div>
            <div>
                <form className="max-w-sm mx-auto">
                    <label htmlFor="type" className="capitalize block mb-2 text-mb font-medium text-white dark:text-white">type</label>
                    <select {...fieldType} id="type" className="capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[[#375EAA]] block w-full p-2.5">
                        {typesList.map((item, index) => {
                            return <option className='capitalize' key={`type-key-${index}`} value={item}>{item}</option>
                        })};
                    </select>
                </form>
            </div>
            <div>
                <form className="max-w-sm mx-auto">
                    <label htmlFor="sort" className="capitalize block mb-2 text-mb font-medium text-white dark:text-white">sort by</label>
                    <select {...fieldSort} id="sort" className="capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[[#375EAA]] block w-full p-2.5">
                        {sortList.map((item, index) => {
                            return <option className='capitalize' key={`type-key-${index}`} value={item}>{item}</option>
                        })};
                    </select>
                </form>
            </div>
            <div>
                <form className="max-w-sm mx-auto">
                    <label htmlFor="keyword" className="capitalize block mb-2 text-mb font-medium text-white dark:text-white">search</label>
                    <input
                        {...fieldKeyword}
                        id="keyword" className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[[#375EAA]] block w-full p-2.5">
                    </input>
                </form>
            </div>

        </div>
    )
}

export default SearchForm