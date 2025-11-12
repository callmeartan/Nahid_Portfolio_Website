import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// Configure your email service here
// Option 1: Gmail (requires app password)
// Option 2: SendGrid, Mailgun, or other SMTP service
const transporter = nodemailer.createTransport({
  service: "gmail", // Change to your email service
  auth: {
    user: functions.config().email?.user || "your-email@gmail.com",
    pass: functions.config().email?.password || "your-app-password",
  },
});

/**
 * Sends an email notification when a new contact message is created
 */
export const sendContactEmail = functions.firestore
  .document("contact_messages/{messageId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const messageId = context.params.messageId;

    // Email configuration
    const recipientEmail = functions.config().email?.recipient || "nnasiri@ucsc.edu";
    const fromEmail = functions.config().email?.user || "your-email@gmail.com";

    const mailOptions = {
      from: `Portfolio Contact Form <${fromEmail}>`,
      to: recipientEmail,
      subject: `New Contact Form Message from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #06b6d4; border-radius: 4px;">
              <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Message ID: ${messageId}</p>
            <p>This is an automated email from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Message

From: ${data.name}
Email: ${data.email}
Date: ${new Date().toLocaleString()}

Message:
${data.message}

---
Message ID: ${messageId}
This is an automated email from your portfolio contact form.
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully for message ${messageId}`);
      
      // Update the document to mark email as sent
      await snap.ref.update({
        emailSent: true,
        emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      
      return null;
    } catch (error) {
      console.error(`Error sending email for message ${messageId}:`, error);
      
      // Update the document to mark email error
      await snap.ref.update({
        emailSent: false,
        emailError: error instanceof Error ? error.message : "Unknown error",
      });
      
      throw error;
    }
  });

