type Property = {
    id: string
    product_id: string
    name: string
    value: string
}

type PropertyContent = {
    property_id: string
    content_id: string
}

type AccountFile = {
    id: string
    owner_id: string
    type: string
    uri: string
    bucket: string
}