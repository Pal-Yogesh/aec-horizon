import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phoneNumber, email, nameAndDesignation, description, message, source } = body;
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const formSource = source || "Contact Form";
    const subject = `${formSource} - Enquiry from ${nameAndDesignation || "Unknown User"}`;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Enquiry</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #EBEEF8;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; padding: 40px 20px;">
            <tr>
              <td align="center">
                <!-- Main Container -->
                <table role="presentation" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0px 4px 10.8px 0px #9BC1FF; border: 1px solid #E8ECFF;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: #FFFFFF; padding: 40px 30px; text-align: center; border-bottom: 2px solid #EBEEF8;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td align="center">
                            <!-- Logo Container -->
                            <div style="background: rgba(235, 238, 248, 0.56); border-radius: 15px; padding: 20px 30px; display: inline-block; margin-bottom: 25px; border: 1px solid #FFFFFF; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                              <img src="https://res.cloudinary.com/dvr0swclv/image/upload/f_png,w_150,q_auto/v1762191318/logo_i33ugh.png" alt="AEC Horizon Logo" style="width: 120px; height: auto; display: block; max-width: 120px;" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <div style="background: rgba(235, 238, 248, 0.56); border-radius: 18px; padding: 10px 25px; display: inline-block; border: 1px solid #FFFFFF; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                              <h2 style="margin: 0; color: #4B336D; font-size: 20px; font-weight: 600;">
                                New ${formSource} Enquiry
                              </h2>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content Section -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="margin: 0 0 25px 0; color: #4B336D; font-size: 16px; line-height: 1.6;">
                        You have received a new enquiry from your website <strong>${formSource}</strong>:
                      </p>

                      <!-- Contact Details Card -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; background: rgba(235, 238, 248, 0.56); border-radius: 15px; overflow: hidden; margin-bottom: 20px; border: 1px solid #FFFFFF; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                        
                        <!-- Name and Designation -->
                        <tr>
                          <td style="padding: 20px 25px; border-bottom: 2px solid #ffffff;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 40%; vertical-align: top;">
                                  <p style="margin: 0; color: #47099F; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Name & Designation
                                  </p>
                                </td>
                                <td style="width: 60%; vertical-align: top;">
                                  <p style="margin: 0; color: #4B336D; font-size: 15px; font-weight: 600; line-height: 1.6;">
                                    ${nameAndDesignation || "-"}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Email -->
                        <tr>
                          <td style="padding: 20px 25px; border-bottom: 2px solid #ffffff;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 40%; vertical-align: top;">
                                  <p style="margin: 0; color: #47099F; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                     Email Address
                                  </p>
                                </td>
                                <td style="width: 60%; vertical-align: top;">
                                  <p style="margin: 0; color: #4B336D; font-size: 15px; font-weight: 600; line-height: 1.6;">
                                    <a href="mailto:${email}" style="color: #47099F; text-decoration: none; border-bottom: 2px solid #F8AD1D;">
                                      ${email || "-"}
                                    </a>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Phone Number -->
                        <tr>
                          <td style="padding: 20px 25px; border-bottom: 2px solid #ffffff;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 40%; vertical-align: top;">
                                  <p style="margin: 0; color: #47099F; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Phone Number
                                  </p>
                                </td>
                                <td style="width: 60%; vertical-align: top;">
                                  <p style="margin: 0; color: #4B336D; font-size: 15px; font-weight: 600; line-height: 1.6;">
                                    <a href="tel:${phoneNumber}" style="color: #47099F; text-decoration: none;">
                                      ${phoneNumber || "-"}
                                    </a>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- Description -->
                        <tr>
                          <td style="padding: 20px 25px; ${message ? 'border-bottom: 2px solid #ffffff;' : ''}">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 40%; vertical-align: top;">
                                  <p style="margin: 0; color: #47099F; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Description
                                  </p>
                                </td>
                                <td style="width: 60%; vertical-align: top;">
                                  <p style="margin: 0; color: #4B336D; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">
                                    ${description || "-"}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        ${message ? `
                        <!-- Additional Message (Optional) -->
                        <tr>
                          <td style="padding: 20px 25px;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 40%; vertical-align: top;">
                                  <p style="margin: 0; color: #47099F; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Additional Message
                                  </p>
                                </td>
                                <td style="width: 60%; vertical-align: top;">
                                  <p style="margin: 0; color: #4B336D; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">
                                    ${message}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        ` : ''}
                      </table>

                      <!-- CTA Button -->
                      <table role="presentation" style="width: 100%; margin-top: 30px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%); color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 13px; font-weight: 600; font-size: 16px; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                              Reply to Enquiry
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background: rgba(235, 238, 248, 0.56); padding: 25px 30px; text-align: center; border-top: 2px solid #E8ECFF;">
                      <p style="margin: 0 0 10px 0; color: #4B336D; font-size: 13px;">
                        This email was automatically generated from your AEC Horizon website contact form.
                      </p>
                      <p style="margin: 0; color: #4B336D; font-size: 13px;">
                        © ${new Date().getFullYear()} AEC Horizon. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Email not sent",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
