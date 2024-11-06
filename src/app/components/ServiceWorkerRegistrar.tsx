"use client"; // This file needs to be a client component

import { useEffect } from "react";

export default function ServiceWorkerRegistrar() {
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			window.addEventListener("load", () => {
				navigator.serviceWorker
					.register("/service-worker.js")
					.then((registration) => {
						console.log(
							"Service Worker registered with scope:",
							registration.scope,
						);
					})
					.catch((error) => {
						console.error("Service Worker registration failed:", error);
					});
			});
		}
	}, []);

	return null;
}
