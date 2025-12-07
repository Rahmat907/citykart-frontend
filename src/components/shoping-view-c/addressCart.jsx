import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const AddressCart = ({
  addressInfo,
  handleDelteAddress,
  handleEditAddress,
  setcurrentSelectedAddress,
}) => {
  return (
    <Card onClick={() => setcurrentSelectedAddress(addressInfo)}>
      <CardContent className="grid p-4 gap-4">
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
