import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      message,
    } = body;

    await resend.emails.send({
      from: "Gincat Website <onboarding@resend.dev>",
      to: "polcasgarr@gmail.com",
      subject: "Nueva solicitud de presupuesto Gincat",
      html: `
        <h2>Nueva solicitud de presupuesto</h2>

        <p><strong>Nombre:</strong> ${name}</p>

        <p><strong>Empresa:</strong> ${company}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Teléfono:</strong> ${phone}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}