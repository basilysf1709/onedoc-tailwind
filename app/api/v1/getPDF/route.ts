import { Onedoc } from "@onedoc/client";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY as string);

const addTailwindTags = (inputString: string): string => {
  return `<Tailwind>${inputString}</Tailwind>`;
}

export async function POST(request: any) {
  const jsonData = await request.json();
  const htmlContent = jsonData.html;
  const { file, error } = await onedoc.render({
    html: addTailwindTags(htmlContent),
    test: false,
    assets: [
    ],
  });

  if (error) {
    throw error;
  }

  const pdfBuffer = Buffer.from(file);

  // Return the PDF
  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
