export async function GET() {
    const message = "Hellow from Backend";

    return Response.json({message});
}