import { Onedoc } from "@onedoc/client";
import { compile } from "@onedoc/react-print";
import { readFileSync, writeFileSync } from "fs";
import { OneDocComponent } from "@/components/OneDocComponent";
import { join } from "path";
import { OfferLetter } from "@/components/OfferLetter";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY as string);


export async function GET() {
  const { file, error } = await onedoc.render({
    html: await compile(OfferLetter()),
    test: false,
    assets: [
      {
        path: "./util/util.css",
        content: readFileSync(join(process.cwd(), "./util/util.css")).toString(),
      },
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
