
import Link from 'next/link'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import EditGroup from '../my-components/editGroup';

const groupsList = ['Office', 'Develop', 'Server', 'Settings'];

export default function SettingsScreen (){
    return (
        <div>
            <div className="flex flex-row items-center">
                <div className="w-12 h-12 bg-slate-800 opacity-70 rounded-md flex justify-center items-center">
                    <Link href="/"><ChevronLeftIcon fontSize='large'></ChevronLeftIcon></Link>
                </div>
                    {/* <h1 className="ml-16 text-white opacity-70 text-3xl">Settings</h1> */}
            </div>

            <div className="mt-5 mb-5">
                <div className=" mb-2 h-12 pl-2 rounded-sm flex items-center bg-slate-800 opacity-70 text-2xl">
                    General
                    <div className="fixed right-5 text-lg h-12 w-28 bg-slate-900 opacity-70 rounded-sm flex justify-center items-center">
                        Save
                    </div>
                </div>


                
                    <div className="h-12 pl-2 ml-28 mr-28 mb-2 rounded-sm bg-slate-800 opacity-70 flex flex-row items-center">
                        Background URL:
                    </div>
                    <div className="h-12 pl-2 ml-28 mr-28 mb-2 rounded-sm bg-slate-800 opacity-70 flex flex-row items-center">
                        Primary Color:
                    </div>
                    <div className="h-12 pl-2 ml-28 mr-28 mb-2 rounded-sm bg-slate-800 opacity-70 flex flex-row items-center">
                        Secondary Color:
                    </div>
                    <div className="h-12 pl-2 ml-28 mr-28 mb-2 rounded-sm bg-slate-800 opacity-70 flex flex-row items-center">
                        Accent Color:
                    </div>
                   
            </div>
            <div>
                <div className="h-12 pl-2 mb-2 rounded-sm flex items-center bg-slate-800 opacity-70 text-2xl">
                    Groups
                    <div className="fixed right-5 text-lg h-12 w-28 bg-slate-900 opacity-70 rounded-sm flex justify-center items-center">
                        Add Group
                    </div>
                </div>
                
                 <div>
                 {groupsList.map((string, index) => (
                    <div key={index} className="h-12 pl-2 ml-28 mr-28 mb-2 rounded-sm bg-slate-800 opacity-70 flex flex-row items-center">
                        {string}
                        <div className="fixed right-32 mr-1 w-24 h-12 bg-slate-900 opacity-70 flex justify-center items-center rounded-sm">
                            Edit
                        </div>
                        <div className="fixed right-56 w-24 h-12 mr-3 bg-slate-900 opacity-70 flex justify-center items-center rounded-sm">
                            Delete
                        </div>
                    </div>
                ))}
                 </div>

                 <div>
                    <EditGroup></EditGroup>
                 </div>
                    
                   
            </div>         
        </div>
    )
}
