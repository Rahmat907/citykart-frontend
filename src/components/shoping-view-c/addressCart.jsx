import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const AddressCart = ({
  addressInfo,
  handleDelteAddress,
  handleEditAddress,
  setcurrentSelectedAddress,
  selectId
}) => {
  return (
    <Card onClick={() => setcurrentSelectedAddress(addressInfo)}
      className = {`cursor-pointer border-red-700 ${selectId?._id === addressInfo._id ? 'border-red-900 border-4' : 'border-black'}`} 
    >
      <CardContent className= 'grid p-4 gap-4'>
        <Label>Address: {addressInfo?.address}</Label>
        <Label>City : {addressInfo?.city}</Label>
        <Label>Pincode: {addressInfo?.pincode}</Label>
        <Label>Phoneno: {addressInfo?.phone}</Label>
        <Label>Notes :{addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="flex p-3 justify-between">
        <Button onClick={(e) => handleEditAddress(addressInfo)}>Edit</Button>
        <Button onClick={(e) => handleDelteAddress(addressInfo)}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default AddressCart;
