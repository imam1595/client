"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteAlert({myAddedCar}) {
    const { _id } = myAddedCar;

    const router = useRouter();

    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/myAddedCars/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          }
          
        })

        const data = await res.json()

        // console.log(data);

        if (data.deletedCount > 0) {
            toast.info("Delete Successfully");
            router.refresh();
        }
    }

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>this cae</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}