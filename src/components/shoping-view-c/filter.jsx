import { productFilterOptions } from '@/config'
import React, { Fragment } from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { Separator } from '../ui/separator'

const ProductFilter = ({filters,handleFilter}) => {
  return (
    <div className='bg-background rounded-lg shadow-sm '>
        <div className='p-4 border-b'>
             <h2 className='text-lg font-extrabold'>Filters</h2>
        </div>
        <div className='p-4 space-y-4 '>
                {
                    Object.keys(productFilterOptions).map(keyItems=> <Fragment > 
                        <div>
                            <h3 className='text-base font-bold'> {keyItems.charAt(0).toUpperCase() + keyItems.slice(1)} </h3>
                            <div className='grid gap-2 mt-2'>
                                {
                                    productFilterOptions[keyItems].map(option=> <Label className= 'flex font-medium items-center gap-2 '>
                                        <Checkbox  
                                        checked = {
                                            filters && Object.keys(filters).length > 0 && filters[keyItems] && filters[keyItems].indexOf(option.id) > -1
                                        }
                                        onCheckedChange = {()=> handleFilter(keyItems,option.id)} />
                                        {option.label}
                                    </Label>)
                                }
                            </div>
                        </div>
                        <Separator/>
                    </Fragment>)
                }
        </div>
    </div>
  )
}

export default ProductFilter
