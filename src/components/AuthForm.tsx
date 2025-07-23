"use client";

import React from "react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { loginAction, signUpAction } from "@/service/user.service";

type Props = {
  type: "login" | "signUp";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    //console.log("form submited");
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (type === "signUp") {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) {
          router.replace("/login?register=success");
        } else {
          console.log("User creation failed" + data.error);
        }
      } else if (type === "login") {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: email, password }),
        });
        const data = await response.json();
        if (data.success) {
          router.replace("/?login=success");
        } else {
          alert("login failed" + data.error);
        }
      }
      // let errorMessage;
      // if (isLoginForm) {
      //   errorMessage = (await loginAction(email, password)).errorMessage;
      // } else {
      //   errorMessage = (await signUpAction(email, password)).errorMessage;
      // }
      //   if (!errorMessage) {
      //     router.replace(`/?toastType=${type}`);
      //   } else {
      //     console.log = "okwhy"
      //   }
    });
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
