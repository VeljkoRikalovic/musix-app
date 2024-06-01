function ErrorPage({ resetErrorBoundary }) {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-8">
      <h1 className="text-2xl">Something went wrong...</h1>
      <button className="btn btn-neutral" onClick={resetErrorBoundary}>
        try agian
      </button>
    </div>
  );
}

export default ErrorPage;
