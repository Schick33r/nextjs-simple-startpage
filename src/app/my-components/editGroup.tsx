import MyLinkBox from "./myLinkBox";


export default function EditGroup() {
    return(
        <div className="-mt-1 p-2 bg-slate-700 opacity-70 rounded-sm">
            <div className="flex flex-row pb-2 text-lg">
                Edit 'Groupname'
                <div className="w-20 h-12 bg-slate-800 flex justify-center items-center">
                    Save
                </div>
            </div>
            
               
            <div>
                <MyLinkBox url="1"></MyLinkBox>
            </div>
        </div>
    )
}