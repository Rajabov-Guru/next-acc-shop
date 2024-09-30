import {Card} from "@/shadcdn/ui/card";

type PropertyViewProps = {
    name: string;
    value: string;
}

const PropertyView = ({name, value}: PropertyViewProps) => {
    return (
        <div className="flex gap-[16px]">
            <Card className="px-2 py-1 text-app_secondary_text border-0">{name}</Card>
            <Card className="px-2 py-1 border-0">{value}</Card>
        </div>
    )
}

type Props = {
    properties: Property[]
}

const PropertyList = ({properties}: Props) => {
    return (
        <div className="flex flex-col gap-[16px] mb-5">
            <p className="font-bold text-xl">Характеристики</p>
            <div className="py-2 flex flex-col gap-2 border-0">
                {properties.map((property) =>
                    <PropertyView name={property.name} value={property.value} key={property.id}/>
                )}
            </div>
        </div>
    );
};

export default PropertyList;