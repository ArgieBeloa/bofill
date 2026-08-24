import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, date, message } =
      await request.json();

    if (!name || !email || !phone || !service || !date) {
      return Response.json(
        { message: "Name, email, phone, service, and date are required." },
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
      from: "Booking Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `New session request from ${name}`,

      html: `
    <h2>New Session Request</h2>

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
      <strong>Service:</strong> ${service}
    </p>

    <p>
      <strong>Preferred date:</strong> ${date}
    </p>

    <p>
      <strong>Additional notes:</strong>
    </p>

    <p>
      ${message || "—"}
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
      message: "Session request sent successfully.",
    });
  } catch (error) {
    console.error("Book API error:", error);

    return Response.json(
      {
        message: "Internal server error.",
      },
      { status: 500 },
    );
  }
}