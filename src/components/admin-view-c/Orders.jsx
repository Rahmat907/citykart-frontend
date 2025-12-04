 import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import AdminOrderDetails from './OrderDetails'
 
 const AdminOrders = () => {
    const[openDetailsDialog,setopenDetailsDialog] = useState(false)
   return (
     <Card>
      <CardHeader>
        <CardTitle>
          All Orders
        </CardTitle>
      </CardHeader>
       <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead><span className='sr-only'>Details</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>798978</TableCell>
              <TableCell>37/37/29</TableCell>
              <TableCell>araha hai</TableCell>
              <TableCell>{'\u20B9'}7000</TableCell>
              <TableCell>
                <Dialog open={openDetailsDialog} onOpenChange={setopenDetailsDialog} >
                <Button onClick={()=>setopenDetailsDialog(true)} >View Details</Button>
                <AdminOrderDetails/>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
   )
 }
 
 export default AdminOrders
 