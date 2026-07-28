const App = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-8 text-foreground">
      <h1 className="text-4xl font-medium">
        App <span className="text-primary">TASK</span>
      </h1>
      <p className="text-muted-foreground">
        Design system applied — primary, secondary, success, and failed states.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
          Primary
        </span>
        <span className="rounded-lg bg-secondary px-4 py-2 text-sm text-secondary-foreground">
          Secondary
        </span>
        <span className="rounded-lg bg-success px-4 py-2 text-sm text-success-foreground">
          Success
        </span>
        <span className="rounded-lg bg-destructive px-4 py-2 text-sm text-destructive-foreground">
          Failed
        </span>
      </div>
    </div>
  );
};

export default App;
