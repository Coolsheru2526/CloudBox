'use client'

import { useAppStore } from "@/store/store";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useUser } from "@clerk/nextjs";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/firebase";
import toast from "react-hot-toast";
  
function RenameModal(){
    const {user} = useUser();
    const [input,setInput] = useState("");
    const [isRenameModalOpen,setIsRenameModalOpen,fileId,filename] = useAppStore((state)=>[
        state.isRenameModalOpen,
        state.setIsRenameModalOpen,
        state.fileId,
        state.filename
    ]);
    const renameFile = async()=>{
        if(!user||!fileId) return;
        const toastId = toast.loading("Renaming...")
        await updateDoc(doc(db,'users',user.id,"files",fileId),{
            filename:input
        })
        toast.success('Renamed Successfully',{
            id:toastId
        });
        setInput("")
        setIsRenameModalOpen(false);
    }
    return (
        <Dialog open={isRenameModalOpen}
        onOpenChange={(isOpen)=>{
            setIsRenameModalOpen(isOpen)
        }}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Rename the file</DialogTitle>
                <Input
                id="link"
                defaultValue={filename}
                onChange={(e)=>setInput(e.target.value)}
                onKeyDownCapture={(e)=>{
                    if(e.key==="Enter"){
                        renameFile();
                    }
                }}/>
                <div className="flex space-x-2 py-3">
                    <Button
                    size="sm"
                    className="px-3 flex-1"
                    variant={"ghost"}
                    onClick={()=>setIsRenameModalOpen(false)}
                    >
                        <span className="sr-only">Cancel</span>
                        <span>Cancel</span>
                    </Button>
                    <Button
                    type="submit"
                    size="sm"
                    className="px-3 flex-1"
                    onClick={()=>renameFile()}
                    >
                        <span className="sr-only">Rename</span>
                        <span>Rename</span>
                    </Button>
                </div>
                </DialogHeader>
          </DialogContent>
        </Dialog>
    );
}

export default RenameModal;