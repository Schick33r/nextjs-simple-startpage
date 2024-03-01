import MyLinkBox from "./myLinkBox"


export default function MyDock1Items() {
    const dock1Items = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"]

    return (
        <div className="flex flex-row">
            {dock1Items.map((string, index)=>
            (
                <div className="">
                    <MyLinkBox url={string}></MyLinkBox>
                </div>
            ))}
        </div>
    )
}