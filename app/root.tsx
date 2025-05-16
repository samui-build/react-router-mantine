import React from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Box, Code, ColorSchemeScript, Container, mantineHtmlProps, Text, Title } from "@mantine/core";
import type { Route } from "./+types/root";
import "./app.css";
import { AppTheme } from "~/app-theme";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body>
        <AppTheme>{children}</AppTheme>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Container component='main' pt='xl' p='md' mx='auto'>
      <Title>{message}</Title>
      <Text>{details}</Text>
      {(stack) && (
        <Box component='pre' w='100%' style={{ overflowX: 'auto' }} p='md'>
          <Code>{stack}</Code>
        </Box>
      )}
    </Container>
  );
}
