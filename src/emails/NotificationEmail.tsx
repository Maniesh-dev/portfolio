import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr
} from "@react-email/components";
import * as React from "react";

interface NotificationEmailProps {
    name: string;
    email: string;
    phone: string;
    projectDetails: string;
}

export const NotificationEmail = ({ name, email, phone, projectDetails }: NotificationEmailProps) => (
    <Html>
        <Head />
        <Preview>New Portfolio Lead: {name}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Text style={logoText}>NEW LEAD DETECTED 🚀</Text>
                </Section>

                <Section style={content}>
                    <Heading style={h1}>You have a new message from {name}</Heading>

                    <Text style={label}>Name:</Text>
                    <Text style={value}>{name}</Text>

                    <Text style={label}>Email:</Text>
                    <Text style={value}><a href={`mailto:${email}`} style={link}>{email}</a></Text>

                    <Text style={label}>Phone:</Text>
                    <Text style={value}>{phone || "Not provided"}</Text>

                    <Hr style={hr} />

                    <Text style={label}>Project Details:</Text>
                    <Text style={messageText}>
                        {projectDetails}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default NotificationEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "40px 20px",
    maxWidth: "560px",
};

const header = {
    padding: "20px 0",
    textAlign: "center" as const,
};

const logoText = {
    color: "#EB5B00",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0",
};

const content = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "40px",
    border: "1px solid #e6ebf1",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 0 24px",
};

const label = {
    color: "#8898aa",
    fontSize: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    margin: "0 0 4px",
};

const value = {
    color: "#333",
    fontSize: "16px",
    margin: "0 0 20px",
    fontWeight: "500",
};

const link = {
    color: "#EB5B00",
    textDecoration: "none",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "24px 0",
};

const messageText = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "26px",
    backgroundColor: "#f8fafc",
    padding: "16px",
    borderRadius: "6px",
    margin: "0",
    whiteSpace: "pre-wrap" as const,
};
