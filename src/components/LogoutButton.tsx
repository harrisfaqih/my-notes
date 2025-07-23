"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
//import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useSonner } from "sonner";
import { toast } from "./ui/sonner";

//import { logOutAction } from "@/actions/users";

function LogoutButton() {
  //const { toast } = useSonner();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errorMessage = null;

    if (errorMessage) {
      toast(errorMessage, {
        description: errorMessage,
      });
      router.push("/");
    } else {
      toast("Logout berhasil", {});
    }

    setLoading(false);
  };
  return (
    <Button
      variant="outline"
      onClick={handleLogOut}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogoutButton;
