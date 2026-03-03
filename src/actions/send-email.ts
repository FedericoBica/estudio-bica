// src/app/actions/sendEmail.ts
"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: any) {
  try {
    const { nombre, email, telefono, asunto, mensaje } = formData;

    await resend.emails.send({
      from: "Estudio Bica <onboarding@resend.dev>", // Al principio usa este de prueba
      to: "fedebicasua@gmail.com", 
      subject: `Nueva consulta: ${asunto || "Contacto Web"}`,
      replyTo: email,
      html: `
        <h1>Nueva consulta desde la web</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando mail:", error);
    return { success: false };
  }
}