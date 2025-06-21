
const Index = () => {
  // Redirect to the portfolio HTML file
  window.location.href = '/index.html';
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading Portfolio...</h1>
        <p className="text-xl text-muted-foreground">Redirecting to Udhaya Kumar's professional portfolio</p>
      </div>
    </div>
  );
};

export default Index;
