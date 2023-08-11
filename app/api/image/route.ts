import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "1024x1024" } = body;

        if (!userId) return new NextResponse("Unauthorized", { status: 401 });

        if (!configuration.apiKey) return new NextResponse("OpenAI api key not configued", { status: 500 });

        if (!prompt) return new NextResponse("Prompt required", { status: 400 });
        if (!amount) return new NextResponse("Amount required", { status: 400 });
        if (!resolution) return new NextResponse("Resolution required", { status: 400 });

        const response = await openai.createImage({
            prompt,
            n: parseInt(amount, 10),
            size: resolution,
        })

        return NextResponse.json(response.data.data);
    } catch (error) {
        console.log("[IMAGE_ERROR", error);
        return new NextResponse("Internal error", { status: 500 })
    }
}