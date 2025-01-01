import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/satoshi/satoshi.css";
import "/public/assets/css/main.css";
import "@/node_modules/react-modal-video/css/modal-video.css";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
export const metadata: Metadata = {
  title: "Millenium Yazılım | Web, Mobil Uygulama ve Dijital Çözümler",
  description:
    "Millenium Yazılım, web ve mobil uygulama çözümleri, profesyonel marka yönetimi, sosyal medya yönetimi ve CRM hizmetleri sunarak işinizi dijital dünyada güçlendirir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Layout headerStyle={1} footerStyle={2}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
