// import { getUser } from "@/auth/server";
// import AskAIButton from "@/components/AskAIButton";
// import NewNoteButton from "@/components/NewNoteButton";
// import NoteTextInput from "@/components/NoteTextInput";
// import HomeToast from "@/components/HomeToast";
import { prisma } from "@/db/prisma";
import { getUserByEmailService } from "@/service/user.service";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function page({ searchParams }: Props) {
  const noteIdParam = (await searchParams).noteId;
  const user = await getUserByEmailService("test@email-test.com");

  const noteId = Array.isArray(noteIdParam)
    ? noteIdParam![0]
    : noteIdParam || "";

  // const note = await prisma.note.findUnique({
  //   where: { id: noteId, authorId: user?.id },
  // });

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2"></div>
    </div>
  );
}

export default page;
