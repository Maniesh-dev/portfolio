import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
    name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Thanks for reaching out! Let's build something amazing.</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Text style={logoText}>MANIESH SANWAL<span style={{ color: '#EB5B00' }}> DEV</span></Text>
                </Section>

                <Section style={content}>
                    <Heading style={h1}>Hello {name},</Heading>

                    <Text style={text}>
                        Thank you for reaching out to me! I've received your message and will review your project details shortly.
                    </Text>

                    <Text style={text}>
                        I typically respond within 24 hours to discuss how we can bring your ideas to life. In the meantime, feel free to check out more of my <a href="https://maniesh.dev" style={link}>recent work</a>.
                    </Text>

                    <Text style={text}>
                        Looking forward to speaking with you!
                    </Text>

                    <Text style={signoff}>
                        Best regards,<br />
                        <strong>Maniesh Sanwal</strong><br />
                        <span style={{ color: '#EB5B00' }}>Designer + Developer</span>
                    </Text>
                </Section>

                <Section style={footer}>
                    <Text style={footerText}>
                        © {new Date().getFullYear()} Maniesh Sanwal. All rights reserved.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default WelcomeEmail;

const main = {
    backgroundColor: "#0d0d0d",
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
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "4px",
    margin: "0",
};

const content = {
    backgroundColor: "#111111",
    borderRadius: "8px",
    padding: "40px",
    borderTop: "4px solid #EB5B00",
};

const h1 = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 0 24px",
};

const text = {
    color: "#b7ab98",
    fontSize: "16px",
    lineHeight: "26px",
    margin: "0 0 24px",
};

const link = {
    color: "#EB5B00",
    textDecoration: "none",
};

const signoff = {
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "26px",
    marginTop: "40px",
};

const footer = {
    padding: "32px 0 0",
    textAlign: "center" as const,
};

const footerText = {
    color: "#b7ab98",
    fontSize: "12px",
    opacity: 0.6,
};
