import { NextRequest } from "next/server";
import { selectActiveExperiments } from "@ninetailed/experience.js";
import { get } from "@vercel/edge-config";

console.log(selectActiveExperiments);
// comment import above to remove the issue
// error Error [TypeError]: labels.entries is not a function or its return value is not iterable

export async function middleware(req: NextRequest) {
  console.log(get("test"));
  console.log(req.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|vercel.svg).*)"],
};
