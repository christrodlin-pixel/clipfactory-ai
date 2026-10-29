// ClipFactory AI - Edge Function prototype for connection status / health.
// Deploy only to a dedicated backend project after authentication and storage are configured.
// This endpoint NEVER claims social accounts are connected without verified records.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
const json=(data:unknown,status=200)=>new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});
Deno.serve(async(req:Request)=>{
 if(req.method!=="GET")return json({error:"Method not allowed"},405);
 const url=new URL(req.url);
 if(url.pathname.endsWith("/health"))return json({ok:true,service:"clipfactory-social",version:1});
 return json({status:"setup_required",providers:{instagram:"not_configured",facebook:"not_configured",tiktok:"not_configured",youtube:"not_configured"},message:"Configure secure OAuth and account ownership before enabling direct publishing."},503);
});
