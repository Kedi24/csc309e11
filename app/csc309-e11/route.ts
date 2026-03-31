import { getUTorId } from "@/script";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const html = `
        <div id="auto-tester">
            Hi. I m ${getUTorId()}, and I have learned how to develop a full-stack web app
            and deploy it!
        </div>
    `;
    return new NextResponse(html, {
        status: 200,
        headers: {
            "Content-Type": "text/html; charset=utf-8",
        },
    });
}