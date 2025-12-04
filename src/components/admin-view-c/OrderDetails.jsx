import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonForm from "../common/form";

const initialFormData ={
    status : ""
}

const AdminOrderDetails = () => {
    const [formData,setFormData]=useState(initialFormData)

    const handleUpdateStatus = (e) => {
        e.preventDefault()
    }
  return (
    <DialogContent className= 'sm:max-w-[600px] max-h-[90vh] overflow-y-auto'>
      <div className="grid  gap-6 ">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>123456</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>27/15/2025</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>In Progress</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>{"\u20B9"}7000 </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span>Product One</span>
                <span>{"\u20B9"} 7000 </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>Rahmat</span>
              <span>Address</span>
              <span>City</span>
              <span>PinCode</span>
              <span>Phone</span>
              <span>notes</span>
            </div>
          </div>
        </div>
        <div>
          <CommonForm
            formControls={[
              {
                  name: "status",
                  label: "Order Status",
                componentType: "select",
                options: [
                    { label: "Pending", id: "pending" },
                  { label: "In Progress", id: "inprogress" },
                  { label: "In Shipping", id: "inshipping" },
                  { label: "Delivered", id: "delivered" },
                  { label: "Rejected", id: "rejected" },
                ],
              },
            ]}
            formData={formData}
            setFormatData={setFormData}
            buttonText={'Update Order Status'}
            onSubmit={handleUpdateStatus}
          />
        </div>
      </div>
    </DialogContent>
  );
};

export default AdminOrderDetails;
