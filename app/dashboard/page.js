export default function dashboardPage(){
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">系統總覽</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-400 rounded-lg shadow">今日訂單:0</div>
                <div className="p-4 bg-slate-400 rounded-lg shadow">目前庫存:</div>
                <div className="p-4 bg-slate-400 rounded-lg shadow">營業額:</div>
            </div>
        </div>
    )
}