import { redirect } from "next/navigation";

export default function ApplyPage() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSfX44tkeSxqtXyNymHFBC6i_I8xTQOH1rcXJ0NcpEdPrIyjfg/viewform?usp=publish-editor",
  );
}