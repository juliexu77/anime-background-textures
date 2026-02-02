const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">📸 Image Hosting Repo</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          This repository hosts images with a JSON manifest for random image fetching.
        </p>
        <div className="rounded-lg border bg-card p-6 text-left">
          <h2 className="mb-3 text-xl font-semibold">Quick Start</h2>
          <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
            <li>Upload images to the <code className="rounded bg-muted px-1">images/</code> folder</li>
            <li>Update <code className="rounded bg-muted px-1">images.json</code> with filenames</li>
            <li>Update the <code className="rounded bg-muted px-1">baseUrl</code> with your GitHub username/repo</li>
            <li>Other apps can fetch random images via the JSON manifest</li>
          </ol>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          See README.md for usage examples in JavaScript, React, and Python.
        </p>
      </div>
    </div>
  );
};

export default Index;
