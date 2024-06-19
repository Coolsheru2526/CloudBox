import DropzoneComponent from "@/components/Dropzone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs/server";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = async() => {
    const {userId} = auth();
    const doscResults= await getDocs(collection(db,"users",userId!,"files"))
    const skeletonFiles: FileType[] = doscResults.docs.map(doc=>({
        id:doc.id,
        filename:doc.data().filename||doc.id,
        timestamp:new Date(doc.data().timestamp?.seconds*1000)||undefined,
        fullName:doc.data().fullName,
        downloadURL:doc.data().downloadURL,
        type:doc.data().type,
        size:doc.data().size
    }))
    return (
        <div className="border-t">
            <DropzoneComponent/>
            <section className="container space-y-5">
                <h2>All Files</h2>
                <div>
                    <TableWrapper
                    skeletonFiles={skeletonFiles}
                    />
                </div>
            </section>
        </div>
    );
}

export default Dashboard;