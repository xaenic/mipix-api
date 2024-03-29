import { getAnifyEpisodes, getAnifyMetadata } from "@/lib/anify";
import { NextResponse } from "next/server";
export async function GET(request: Request, context: any) {
  const { params } = context;
  if (params.provider === "anify"){
    console.log(`Metadata ${params.id}`)
    const data = await getAnifyMetadata(params.id)
    return NextResponse.json({
      results: data,
    });
  }
  if (params.provider === "consumet") {
    return NextResponse.json({
      results: "Consumet",
    });
  }

  return NextResponse.json({
    results: "Missing Params",
  });
}
