import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, details } = await request.json();

    if (!name || !email || !phone || !details) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return Response.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is missing");

      return Response.json(
        { message: "Contact email is not configured." },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `New message from ${name}`,

      html: `
    <h2>New Contact Message</h2>

    <p>
      <strong>Name:</strong> ${name}
    </p>

    <p>
      <strong>Email:</strong> ${email}
    </p>

    <p>
      <strong>Phone:</strong> ${phone}
    </p>

    <p>
      <strong>Message:</strong>
    </p>

    <p>
      ${details}
    </p>
  `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          message: error.message || "Failed to send email.",
        },
        { status: 500 },
      );
    }

    console.log("Email sent:", data);

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        message: "Internal server error.",
      },
      { status: 500 },
    );
  }
}
