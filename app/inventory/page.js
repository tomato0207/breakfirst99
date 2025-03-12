import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Badge} from "@/components/ui/badge"
import OrdersPage from './page';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const orders = [
    {
        id:1,
        name:"培根",
        stock:20,
        minStock:15,
    },
    {
        id:2,
        name:"雞蛋",
        stock:20,
        minStock:15,
    },
    {
        id:3,
        name:"吐司",
        stock:20,
        minStock:15,
    },
];
export default function Inventory(){
    return(
        <div className="p-8">
            <div className="flexx justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">訂單管理</h1>
                <Button asChild>
                    <Link href="/orders/new">新增訂單</Link>
                </Button>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            
                            <TableHead>商品名稱</TableHead>
                            <TableHead>當前庫存</TableHead>
                            <TableHead>最低庫存</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order)=>(
                            <TableRow key={order.id}>
                            <TableCell>{order.name}</TableCell>
                            <TableCell>{order.stock}</TableCell>
                            <TableCell>{order.minStock}</TableCell>
                            <TableCell>
                                <Button className="mr-2 bg-red-700 text-white">詳情</Button>
                                <Button>取消</Button>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}