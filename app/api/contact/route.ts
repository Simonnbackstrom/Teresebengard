import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { namn, organisation, epost, telefon, meddelande } = await req.json();

  const { error } = await resend.emails.send({
    from: "Bokningsformulär <noreply@bengard.se>",
    to: "terese@bengard.se",
    replyTo: epost,
    subject: `Bokningsförfrågan från ${organisation}`,
    html: `
      <p><strong>Namn:</strong> ${namn}</p>
      <p><strong>Organisation:</strong> ${organisation}</p>
      <p><strong>E-post:</strong> ${epost}</p>
      <p><strong>Telefon:</strong> ${telefon || "–"}</p>
      <hr />
      <p><strong>Meddelande:</strong></p>
      <p>${meddelande.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
