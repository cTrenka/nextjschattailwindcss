import { fetchUnreadMessagesCount, removeItemfromNotificationlist, replyMessage } from "@/app/lib/NotificationFetch";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    if(req.method !== "POST") {
        return NextResponse.json({status: 405});
    }

    const {email} = await req.json();
    const result = await fetchUnreadMessagesCount({email});
    if(result){
        return NextResponse.json({count: result});
    }
    return NextResponse.json({count: 0});
}