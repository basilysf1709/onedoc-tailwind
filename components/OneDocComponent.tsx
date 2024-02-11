'use server'
import { Tailwind } from "@onedoc/react-print";
import ReactDOMServer from "react-dom/server";

export const OneDocComponent = () => {
  return (
    <Tailwind>
      <div className="bg-gradient-to-tr from-blue-500 to-blue-700 rounded-2xl p-12"></div>
      <p className="py-12 text-slate-800">
        This is a Tailwind component. All children of this component will have
        access to the Tailwind CSS classes.
      </p>
    </Tailwind>
  );
};

export const htmlContent = () => {
  return ReactDOMServer.renderToString(<OneDocComponent />);
}