import { PositionListWidget } from "@/widgets/PositionList";

export default function Basket(){
    return (
        <div className="flex flex-col py-[40px] min-h-[650px] h-full">
            <p className="text-center mb-5 font-bold text-3xl">Ваши позиции</p>
            <PositionListWidget/>
        </div>
    )
}