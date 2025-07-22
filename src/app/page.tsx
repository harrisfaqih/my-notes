function HomePage() {
  return <div>Page</div>;
}
export default HomePage;

// import { prisma } from "@/db/prisma";
// import { getUserByEmailService } from "@/service/user.service";

// type Props = {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };

// export default async function Page({ searchParams }: Props) {
//   const noteIdParam = (await searchParams).noteId;
//   const user = await getUserByEmailService("test@email-test.com");
//   const tidak = () => {
//     return <div>tidak ada</div>;
//   };

//   const noteId = Array.isArray(noteIdParam)
//     ? Number(noteIdParam[0])
//     : Number(noteIdParam);

//   if (!user || "errorMessage" in user) {
//     return tidak();
//   }

//   const note = await prisma.notes.findUnique({
//     where: { id: noteId, authorId: user?.id },
//   });

//   return (
//     <div className="flex h-full flex-col items-center gap-4">
//       <div className="flex w-full max-w-4xl justify-end gap-2">

//       </div>
//     </div>
//   );
// }
