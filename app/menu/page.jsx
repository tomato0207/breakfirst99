import {Button} from "@/components/ui/button";
export default function MenuPage(){
    return(
        <div>
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">菜單管理</h1>
            <Button className="bg-blue-700 hover:bg-yellow-300">新增菜單</Button>
        </div>
        <div className="bg-slate-300 p-4 rounded-lg shadow">
            <h2>早餐</h2>
            <ul className="flex">
                <li>
                <div>豆漿</div>
                <div>$25</div>
                </li>
                <li>
                <div>油條</div>
                <div>$25</div>
                </li>
            </ul>
        </div>
        </div>
    );
}