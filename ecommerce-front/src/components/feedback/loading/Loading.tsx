import { TLoading } from "@customTypes/shared";

interface loadingProps {
    status: TLoading;
  error: string | null;
  children: React.ReactNode;
}

function Loading({ status, error, children }: loadingProps) {
    if (status === 'pending') {
        return <p>Loading Pleas Wait</p>
    }
    if (status === "failed") {
        return <p>{error}</p>
    }
  return <>{children}</>;
}

export default Loading;
