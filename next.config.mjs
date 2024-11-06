import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Other Next.js configurations if needed
};

export default withSentryConfig(nextConfig, {
	// Sentry configurations
	org: "coaching-tales",
	project: "coaching_tales_project",
	silent: !process.env.CI,
	widenClientFileUpload: true,
	reactComponentAnnotation: { enabled: true },
	tunnelRoute: "/monitoring",
	hideSourceMaps: true,
	disableLogger: true,
	automaticVercelMonitors: true,
});
