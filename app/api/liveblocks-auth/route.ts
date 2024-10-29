import { Liveblocks } from "@liveblocks/node";

import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveBlocks = new Liveblocks({
    secret: "sk_dev_c81KEJh-p2o6usdWTXH9XZDiFJBsWVFfTh-_bOoxiIm-LQ566h4StQUvmh8A-Y-N"
});

export async function POST(request: Request) {
    const authorization = auth();
    const user = await currentUser();
  
    if (!authorization || !user) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { room } = await request.json();

    const board = await convex.query(api.board.get, { id: room });
  
    if (board?.orgId !== authorization.orgId) {
      return new Response("Unauthorized", { status: 403 });
    }
    
    const userInfo = {
        name: user.firstName || "Teammate",
        picture: user.imageUrl,
    };

    const session = liveBlocks.prepareSession(user.id, { userInfo });
    
    if (room) {
        session.allow(room, session.FULL_ACCESS);
    }
    
    const { status, body } = await session.authorize();
    
    return new Response(body, { status });
}