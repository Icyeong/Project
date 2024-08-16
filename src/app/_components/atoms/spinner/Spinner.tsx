import ClipLoader from "react-spinners/ClipLoader";

interface SpinnerProps {
  loading: boolean;
  override?: any;
}
export default function Spinner({ loading, override }: SpinnerProps) {
  return (
    <ClipLoader
      color="rgb(0 81 255)"
      loading={loading}
      cssOverride={override || { margin: "auto" }}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
