export async function onRequest(context) {
  const url = context.env.SMARTLINK;
  if (!url) return new Response('Not found', { status: 404 });
  return Response.redirect(url, 302);
}
