import CommonForm from '@/components/common/form'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductElement } from '@/config'
import React, { Fragment, useState } from 'react'

const initialFormData = {
  images : null,
  title: "",
  description :  "",
  category : "",
  brand : "",
  price : "",
  salePrice : "",
  totalStock : ""
}

const AdminProduct = () => {
  const [openCreateProductDialog,setopenCreateProductDialog] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  const onSubmit = ()=>{

  } 
  return (
    <Fragment>
      <div className='mb-5 flex w-full justify-end'>
      <Button onClick = {()=>setopenCreateProductDialog(true)}>Add new Product</Button>
    </div>
    <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'> </div>

    <Sheet open={openCreateProductDialog}
    onOpenChange = {()=>{
      setopenCreateProductDialog(false);
    }}
    >
      <SheetContent side='right' className="overflow-auto" aria-describedby= "" >
      <SheetHeader>
              <SheetTitle>Add new Product</SheetTitle>
      
      <div className='py-6'>
      <CommonForm formData={formData} setFormatData={setFormData} onSubmit={onSubmit}
        formControls={addProductElement} 
        buttonText='Add' 
      />
      </div>
      </SheetHeader>
      </SheetContent>
    </Sheet>
    </Fragment> 
  )
}

export default AdminProduct