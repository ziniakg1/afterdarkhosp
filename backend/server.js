import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
});

const upload = multer({
    dest: "uploads/"
});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify((error) => {
    if (error) {
        console.error("EMAIL CONFIGURATION ERROR:", error);
    } else {
        console.log("Email server is ready!");
    }
});

app.post(
    "/api/apply",
    upload.single("resume"),
    async (req, res) => {
        console.log("APPLICATION REQUEST RECEIVED");
        try {
            const {
                jobTitle,
                firstName,
                lastName,
                email,
                phone
            } = req.body;

            const attachments = req.file
                ? [
                    {
                        filename: req.file.originalname,
                        path: req.file.path
                    }
                ]
                : [];

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `New Application - ${jobTitle}`,
                text: `
Position: ${jobTitle}

Applicant: ${firstName} ${lastName}

Email: ${email}

Phone: ${phone}
                `,
                attachments
            });

            if (req.file) {
                fs.unlinkSync(req.file.path);
            }

            res.status(200).json({
                success: true,
                message: "Application submitted successfully."
            });

        } catch (error) {
            console.error("APPLICATION ERROR:", error);

            res.status(500).json({
                success: false,
                message: "Failed to submit application."
            });
        }
    }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});