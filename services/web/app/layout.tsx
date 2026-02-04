import "./globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { UiRouterProvider } from "@/components/layout/UiRouterProvider";
import { ProjectProvider } from "@/components/project/ProjectProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeProvider>
            <ProjectProvider>
              <UiRouterProvider>{children}</UiRouterProvider>
            </ProjectProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}