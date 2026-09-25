import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, projectType, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In a production app, this would send an email via SendGrid/Resend or store in a database
    // Here we log the message and return a clean, friendly JSON response
    console.log("Received contact form submission:", {
      name,
      email,
      subject: subject || "No subject provided",
      projectType: projectType || "General Inquiry",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Thank you ${name}! Your inquiry regarding ${projectType || "our services"} has been received. A Digital Chautari team member in Kathmandu will reach out within 24 hours.`,
      submission: {
        name,
        email,
        subject,
        projectType,
      },
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message." },
      { status: 500 }
    );
  }
}
