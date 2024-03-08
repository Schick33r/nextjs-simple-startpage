
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import MyLinkBox from "./my-components/myLinkBox";
import MyCustomSearchBar from "./my-components/mySearchBar";
import MyBottomDock from "./my-components/myBottomDock";
import MyDock1Items from "./my-components/MyDock1Items";





export default function Home() {
  return (
    <main> 
      <div>
        <div className="flex justify-center items-center">
            <MyCustomSearchBar></MyCustomSearchBar>
        </div>
       
        {/* <div  className="fixed bottom-0 left-0 w-full mb-20 flex justify-center">
          <MyDock1Items></MyDock1Items>
        </div> */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center items-center mb-3">
            <MyBottomDock></MyBottomDock>
        </div>
      </div>
    </main>
  );
}
