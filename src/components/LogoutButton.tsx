"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
//import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useSonner } from "sonner";

//import { logOutAction } from "@/actions/users";

function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //const {toast} = useSonner();
  const handleLogOut = async () => {
    setLoading(true);

    const errorMessage = null;

    if (!errorMessage) {
      router.push(`/?toastType=logOut`);
    } else {
      console.log("error");
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
