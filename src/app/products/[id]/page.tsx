export default function ProductDetail( { params } : {params: { id: string }}) {
    return (
        <h1>Product detail number {params.id}</h1>
    )
}