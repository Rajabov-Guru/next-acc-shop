import Form from "./Form";

export default function MyOrders(){
    return (
        <div className="py-[32px] min-h-[600px] text-center">
            <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-xl">Мои покупки</p>
                <Form/>
            </div>
        </div>
    )
}
