'use client'
import MyLinkBox from "./myLinkBox";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DialogDemo } from "./addLink";
import { Dialog } from "@/components/ui/dialog";


const EditGroup = () => {
    const handleAddLink = () => {
        <DialogDemo></DialogDemo>
        console.log("Add Link")
    };



return (
    <div className="pb-2 mx-28 bg-slate-700 opacity-70 rounded-sm">
            <div className="flex flex-row pb-2 text-lg">
                <div className="flex justify-center items-center bg-slate-800 rounded-sm px-4 h-12">
                    Edit Settings
                </div>

                <div className="flex flex-row fixed right-28 mr-3">

                    <div className="w-12 h-12 bg-slate-800 flex justify-center items-center pl-2 mr-2 rounded-sm">
                       <ArrowBackIosIcon fontSize="small"></ArrowBackIosIcon>
                    </div>
                    <div className="w-12 h-12 bg-slate-800 flex justify-center items-center pl-1 mr-2 rounded-sm">
                       <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                    </div>
                    <div>
                        <DialogDemo></DialogDemo>
                    </div>
                    
                </div>
                
            </div>
            
               
            <div>
                <MyLinkBox url="1"></MyLinkBox>
            </div>
        </div>
);
};


export default EditGroup


// export default function EditGroup() {
//     return(
//         <div className="pb-2 mx-28 bg-slate-700 opacity-70 rounded-sm">
//             <div className="flex flex-row pb-2 text-lg">
//                 <div className="flex justify-center items-center px-2">
//                     Edit 'Groupname'
//                 </div>

//                 <div className="flex flex-row fixed right-28 mr-3">

//                     <div className="w-12 h-12 bg-slate-800 flex justify-center items-center pl-2 mr-2 rounded-sm">
//                        <ArrowBackIosIcon fontSize="small"></ArrowBackIosIcon>
//                     </div>
//                     <div className="w-12 h-12 bg-slate-800 flex justify-center items-center pl-1 mr-2 rounded-sm">
//                        <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
//                     </div>
//                     <div className="w-28 h-12 bg-slate-800 flex justify-center items-center px-2 mr-2 rounded-sm" onClick={handleAddLink}>
//                         Add Link
//                     </div>
                    
//                 </div>
                
//             </div>
            
               
//             <div>
//                 <MyLinkBox url="1"></MyLinkBox>
//             </div>
//         </div>
//     )
// }