// "use client";

// import { useTheme } from "next-themes";
// import { useEffect } from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { X } from "lucide-react";
// import { Toaster as Sonner, ToasterProps } from "sonner";

//   const toastVariants = cva(
//     "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
//     {
//       variants: {
//         variant: {
//           default: "border bg-background text-foreground",
//           destructive:
//             "destructive group border-destructive bg-destructive text-destructive-foreground",
//           success: "bg-emerald-700",
//         },
//       },
//       defaultVariants: {
//         variant: "default",
//       },
//     },
//   );
//   const Toaster = ({ ...props }: ToasterProps) => {
//     const { theme = "system" } = useTheme();

//   return (
//     <Sonner
//       theme={theme as ToasterProps["theme"]}
//       className="toaster group"
//       style={
//         {
//           "--normal-bg": "var(--popover)",
//           "--normal-text": "var(--popover-foreground)",
//           "--normal-border": "var(--border)",
//         } as React.CSSProperties
//       }
//       {...props}
//     />
//   );
// };

// export { Toaster };

"use client";

import { useTheme } from "next-themes";
import { cva, type VariantProps } from "class-variance-authority";
import { Toaster as Sonner, toast as sonnerToast, ToasterProps } from "sonner";

// Variasi styling toast (opsional, jika ingin custom varian)
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "bg-emerald-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Komponen Toaster yang sudah sesuai dengan Sonner
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

// Ekspor fungsi toast jika ingin trigger toast dari luar
const toast = sonnerToast;

export { Toaster, toast, toastVariants };
